type Operation = "equals" | "contains";

export interface Attribute {
    name: string;
    value: string;
    operation?: Operation;
}

export type Logic = "AND" | "OR";

export interface XNode {
    tag: string;
    attributes?: Attribute[];
    attributeLogic?: Logic; // Field for specifying AND or OR
    index?: number;
    isAbsolute?: boolean;
}

