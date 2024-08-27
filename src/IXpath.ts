import {INode} from "./INode";

export interface IXpath {
    node(n: INode): IXpath;

    child(n: INode): IXpath;

    descendant(n: INode): IXpath;

    ancestor(n: INode): IXpath;

    parent(n: INode): IXpath;

    self(n: INode): IXpath

    following(n: INode): IXpath;

    followingSibling(n: INode): IXpath;

    preceding(n: INode): IXpath;

    precedingSibling(n: INode): IXpath;

    xpath(): string;
}
