import {XpathBuilder} from "../../XpathBuilder";
import {Attribute, Logic} from "../../XNode";

export class Button extends XpathBuilder {
    private static readonly TAG = "android.widget.Button";

    constructor(attributes?: Attribute[], attributeLogic?: Logic, index?: number, isAbsolute?: boolean) {
        super();
        this.node({
            tag: Button.TAG,
            attributes,
            attributeLogic,
            index,
            isAbsolute
        });
    }
}