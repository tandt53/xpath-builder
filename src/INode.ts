type Operation = "equals" | "contains";

export interface Attribute {
    name: string;
    value: string;
    operation?: Operation;
}

export type Condition = "AND" | "OR";

export interface INode {
    tag: string;
    attributes?: Attribute[];
    condition?: Condition; // Field for specifying AND or OR
    index?: number;
    isAbsolute?: boolean;
}

