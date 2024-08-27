import {z} from "zod";
import {INode} from "../INode";

// Define the Operation Enum
const OperationEnum = z.enum(["equals", "contains"], {
    errorMap: (issue) => {
        return {message: "Operation must be either 'equals' or 'contains'."};
    }
});

// Define the Attribute Schema with custom error messages
const AttributeSchema = z.object({
    name: z.string().min(1, "Attribute name is required."),
    value: z.string().min(1, "Attribute value is required."),
    operation: OperationEnum
});

// Define the Logic Enum with a custom error message
const LogicEnum = z.enum(["AND", "OR"], {
    errorMap: () => {
        return {message: "Logic must be either 'AND' or 'OR'."};
    }
});

// Define the XNode Schema with detailed custom error messages
const XNodeSchema = z.object({
    tag: z.string().min(1, "Tag is required and should be a non-empty string."),
    attributes: z
        .array(AttributeSchema)
        .optional()
        .refine((arr) => arr?.length! > 0, {
            message: "Attributes array cannot be empty if defined.",
        }),
    attributeLogic: LogicEnum.optional(),
    index: z
        .number()
        .int("Index should be an integer.")
        .nonnegative("Index should be a non-negative integer.")
        .optional(),
    absolute: z.boolean().optional(),
});

interface ValidationResult<T> {
    isValid: boolean;
    data?: T;
    errors?: string[];
}

// Custom function to format Zod errors
function formatZodErrors(error: z.ZodError): string[] {
    return error.errors.map((err) => `${err.path.join(".")}: ${err.message}`);
}

// Updated validateXNode function that passes validation messages
export function validateXNode(input: any): ValidationResult<INode> {
    const result = XNodeSchema.safeParse(input);
    if (!result.success) {
        const errors = formatZodErrors(result.error);
        return {
            isValid: false,
            errors
        };
    }
    return {
        isValid: true,
        data: result.data as INode,
    };
}

