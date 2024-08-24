import {XNode} from "./XNode";

export interface IXpath {
    node(n: XNode): IXpath;

    child(n: XNode): IXpath;

    descendant(n: XNode): IXpath;

    ancestor(n: XNode): IXpath;

    parent(n: XNode): IXpath;

    self(n: XNode): IXpath

    following(n: XNode): IXpath;

    followingSibling(n: XNode): IXpath;

    preceding(n: XNode): IXpath;

    precedingSibling(n: XNode): IXpath;

    toString(): string;
}
