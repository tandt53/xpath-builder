import {Attribute, Condition} from "../../INode";
import {XpathBuilder} from "../../XpathBuilder";
import {IXpath} from "../../IXpath";
import {NodeBuilder} from "../../NodeBuilder";

export const enum TAG {
    TextView = "android.widget.TextView",
    Button = "android.widget.Button",
    EditText = "android.widget.EditText",
    ImageView = "android.widget.ImageView",
    Checkbox = "android.widget.CheckBox",
}

export function textView(nodeBuilder: NodeBuilder): IXpath {
    return new XpathBuilder().node(nodeBuilder.build());
}

export function textView(text: string, exactMatch: boolean = true): IXpath {
    return new XpathBuilder().node({
        tag: TAG.TextView,
        attributes: [{name: "text", value: text, operation: exactMatch ? "equals" : "contains"}],
    });
}

export function button(nodeBuilder: NodeBuilder): IXpath {
    return new XpathBuilder().node(nodeBuilder.build());
}

export function button(text: string, exactMatch: boolean = true): IXpath {
    return new XpathBuilder().node({
        tag: TAG.Button,
        attributes: [{name: "text", value: text, operation: exactMatch ? "equals" : "contains"}],
    });
}

export function editText(nodeBuilder: NodeBuilder): IXpath {
    return new XpathBuilder().node(nodeBuilder.build());
}

export function editText(hint: string, exactMatch: boolean = true): IXpath {
    return new XpathBuilder().node({
        tag: TAG.EditText,
        attributes: [{name: "hint", value: hint, operation: exactMatch ? "equals" : "contains"}],
    });
}

export function imageView(nodeBuilder: NodeBuilder): IXpath {
    return new XpathBuilder().node(nodeBuilder.build());
}

export function imageView(description: string, exactMatch: boolean = true): IXpath {
    return new XpathBuilder().node({
        tag: TAG.ImageView,
        attributes: [{name: "content-desc", value: description, operation: exactMatch ? "equals" : "contains"}],
    });
}

export function checkbox(nodeBuilder: NodeBuilder): IXpath {
    return new XpathBuilder().node(nodeBuilder.build());
}

export function checkbox(text: string, exactMatch: boolean = true): IXpath {
    return new XpathBuilder().node({
        tag: TAG.Checkbox,
        attributes: [{name: "text", value: text, operation: exactMatch ? "equals" : "contains"}],
    });
}
