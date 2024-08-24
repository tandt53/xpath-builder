import {XpathBuilder} from "../../XpathBuilder";
import {Attribute, Logic} from "../../XNode";

export class ImageView extends XpathBuilder {
    private static readonly TAG = "android.widget.ImageView";

    constructor(attributes?: Attribute[], attributeLogic?: Logic, index?: number, isAbsolute?: boolean) {
        super();
        this.node({
            tag: ImageView.TAG,
            attributes,
            attributeLogic,
            index,
            isAbsolute
        });
    }
}