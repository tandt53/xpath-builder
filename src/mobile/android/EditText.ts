import {XpathBuilder} from "../../XpathBuilder";
import {Attribute, Logic} from "../../XNode";

export class EditText extends XpathBuilder {
    private static readonly TAG = "android.widget.EditText";

    constructor(attributes?: Attribute[], attributeLogic?: Logic, index?: number, isAbsolute?: boolean) {
        super();
        this.node({
            tag: EditText.TAG,
            attributes,
            attributeLogic,
            index,
            isAbsolute
        });
    }
}