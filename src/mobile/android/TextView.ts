import {Attribute, Logic, XNode} from "../../XNode";
import {XpathBuilder} from "../../XpathBuilder";

export class TextView extends XpathBuilder {
    private static readonly TAG = "android.widget.TextView";

    constructor(attributes?: Attribute[], attributeLogic?: Logic, index?: number, isAbsolute?: boolean) {
        super();
        this.node({
            tag: TextView.TAG,
            attributes,
            attributeLogic,
            index,
            isAbsolute
        });
    }
}