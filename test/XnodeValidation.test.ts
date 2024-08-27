import {validateXNode} from "../src/validation/XNodeValidation";
import {INode} from "../src/INode";

describe("XNode validation with detailed error messages", () => {
    it("should pass validation for a valid XNode object", () => {
        const validXNode: INode = {
            tag: "div",
            attributes: [
                { name: "class", value: "container", operation: "contains" }
            ],
            condition: "AND",
            index: 1,
            isAbsolute: true
        };

        const result = validateXNode(validXNode);
        expect(result.isValid).toBe(true);
        expect(result.data).not.toBeNull();
        expect(result.errors).toBeUndefined();
    });

    it("should return validation errors for missing required fields", () => {
        const invalidXNode = {
            attributes: [
                { name: "class", value: "container", operation: "contains" }
            ]
        };

        const result = validateXNode(invalidXNode);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("tag: Required");
    });

    it("should return validation errors for invalid attribute operation", () => {
        const invalidXNode = {
            tag: "div",
            attributes: [
                { name: "class", value: "container", operation: "invalid-operation" as any }
            ]
        };

        const result = validateXNode(invalidXNode);
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain("attributes.0.operation: Operation must be either 'equals' or 'contains'.");
    });
});
