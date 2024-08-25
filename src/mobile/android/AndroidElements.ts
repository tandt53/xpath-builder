import {Attribute, Condition} from "../../XNode";
import {XpathBuilder} from "../../XpathBuilder";
import {IXpath} from "../../IXpath";

const enum TAG {
    TextView = "android.widget.TextView",
    Button = "android.widget.Button",
    EditText = "android.widget.EditText",
    ImageView = "android.widget.ImageView",
    Checkbox = "android.widget.CheckBox",
}

export function textView(attributes?: Attribute[], attributeLogic?: Condition, index?: number, isAbsolute?: boolean): IXpath {
    return new XpathBuilder().node({
        tag: TAG.TextView,
        attributes,
        condition: attributeLogic,
        index,
        isAbsolute
    });
}

export function button(attributes?: Attribute[], attributeLogic?: Condition, index?: number, isAbsolute?: boolean): IXpath {
    return new XpathBuilder().node({
        tag: TAG.Button,
        attributes,
        condition: attributeLogic,
        index,
        isAbsolute
    });
}

export function editText(attributes?: Attribute[], attributeLogic?: Condition, index?: number, isAbsolute?: boolean): IXpath {
    return new XpathBuilder().node({
        tag: TAG.EditText,
        attributes,
        condition: attributeLogic,
        index,
        isAbsolute
    });
}

export function imageView(attributes?: Attribute[], attributeLogic?: Condition, index?: number, isAbsolute?: boolean): IXpath {
    return new XpathBuilder().node({
        tag: TAG.ImageView,
        attributes,
        condition: attributeLogic,
        index,
        isAbsolute
    });
}

export function checkbox(attributes?: Attribute[], attributeLogic?: Condition, index?: number, isAbsolute?: boolean): IXpath {
    return new XpathBuilder().node({
        tag: TAG.Checkbox,
        attributes,
        condition: attributeLogic,
        index,
        isAbsolute
    });
}