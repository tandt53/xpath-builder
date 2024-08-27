import {Attribute, Condition, INode} from "./INode";


export class NodeBuilder {
    private tag: string;
    private attributes: Attribute[] = [];
    private condition: Condition | undefined;
    private idx = -1;
    private isAbsolute = false;

    constructor(tag: string) {
        this.tag = tag;
    }

    with(att: string, value: string): NodeBuilder {
        this.attributes.push({name: `@${att}`, value: value, operation: "equals"});
        return this;
    }

    contains(key: string, value: string ): NodeBuilder {
        this.attributes.push({name: `@${key}`, value: value, operation: "contains"});
        return this;
    }

    and(map: { key: string; value: string }): NodeBuilder {
        this.condition = "AND";
        return this;
    }

    or(map: { key: string; value: string }): NodeBuilder {
        this.condition = "OR";
        return this;
    }

    index(index: number): NodeBuilder {
        this.idx = index;
        return this;
    }

    absolute(): NodeBuilder {
        this.isAbsolute = true;
        return this;
    }

    build(): INode {
        return {
            tag: this.tag,
            attributes: this.attributes,
            condition: this.condition,
            index: this.idx,
            isAbsolute: this.isAbsolute
        };
    }

}