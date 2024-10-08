import {IXpath} from "./IXpath";
import {INode} from "./INode";

export class XpathBuilder implements IXpath {
    private xpathParts: string[] = [];

    node(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n));
        return this;
    }

    following(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'following::'));
        return this;
    }

    ancestor(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'ancestor::'));
        return this;
    }

    child(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'child::'));
        return this;
    }

    preceding(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'preceding::'));
        return this;
    }

    followingSibling(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'following-sibling::'));
        return this;
    }

    parent(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'parent::'));
        return this;
    }

    self(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'self::'));
        return this;
    }

    descendant(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'descendant::'));
        return this;
    }

    precedingSibling(n: INode): IXpath {
        this.xpathParts.push(this.buildNodeXPath(n, 'preceding-sibling::'));
        return this;
    }

    private buildNodeXPath(n: INode, prefix?: string): string {

        let xpath = n.tag;

        if (n.attributes && n.attributes.length > 0) {
            const logic = n.condition || "AND"; // Default to "AND" if not specified
            const attributeConditions = n.attributes.map(attr => {
                const operation = attr.operation || "equals"; // Default to "equals" if not specified
                if (operation === "equals") {
                    return `@${attr.name}='${attr.value}'`;
                } else if (operation === "contains") {
                    return `contains(@${attr.name}, '${attr.value}')`;
                }
            });

            const combinedConditions = attributeConditions.join(logic === "AND" ? " and " : " or ");
            xpath += `[${combinedConditions}]`;
        }

        if (n.index !== undefined) {
            xpath += `[${n.index}]`;
        }

        const isAbsolute = n.isAbsolute || false; // Default to false if not specified
        const absChars = isAbsolute ? "/" : "//";
        return `${absChars}${prefix ? prefix : ''}${xpath}`;
    }

    xpath(): string {
        return this.xpathParts.join("");
    }
}
