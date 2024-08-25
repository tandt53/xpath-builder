import {XpathBuilder} from "../src/XpathBuilder";

describe("XpathBuilder", () => {
    it("should build a simple XPath", () => {
        const xpath = new XpathBuilder()
            .node({
                tag: "div",
                attributes: [
                    {name: "class", value: "container", operation: "contains"}
                ]
            })
            .xpath();

        expect(xpath).toBe("//div[contains(@class, 'container')]");
    });

    it("should build a complex XPath with OR condition", () => {
        const xpath = new XpathBuilder()
            .node({
                tag: "div",
                attributes: [
                    {name: "class", value: "container", operation: "contains"},
                    {name: "id", value: "main", operation: "equals"}
                ],
                condition: "OR"
            })
            .child({
                tag: "span",
                attributes: [
                    {name: "data-label", value: "description", operation: "equals"}
                ]
            })
            .xpath();

        expect(xpath).toBe("//div[contains(@class, 'container') or @id='main']//child::span[@data-label='description']");
    });

    it("should build an XPath with ancestor axis", () => {
        const xpath = new XpathBuilder()
            .node({
                tag: "div",
                attributes: [
                    {name: "class", value: "content", operation: "equals"}
                ]
            })
            .ancestor({
                tag: "section"
            })
            .xpath();

        expect(xpath).toBe("//div[@class='content']//ancestor::section");
    });

    it("should build an XPath with preceding-sibling axis", () => {
        const xpath = new XpathBuilder()
            .node({
                tag: "h2"
            })
            .precedingSibling({
                tag: "h1"
            })
            .xpath();

        expect(xpath).toBe("//h2//preceding-sibling::h1");
    });

});