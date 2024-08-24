import {XpathBuilder} from "./XpathBuilder";

const xpath = new XpathBuilder()
    .node({
        tag: "div",
        attributes: [
            {name: "class", value: "container", operation: "contains"},
            {name: "id", value: "main", operation: "equals"}
        ],
        attributeLogic: "OR" // OR condition between attributes
    })
    .child({
        tag: "span",
        attributes: [
            {name: "data-label", value: "description", operation: "equals"}
        ]
    })
    .ancestor({
        tag: "section"
    })
    .precedingSibling({
        tag: "h1"
    })
    .toString();

console.log(xpath);

const xpath2 = new XpathBuilder()
    .node({
        tag: "div",
        attributes: [
            {name: "class", value: "container", operation: "contains"},
            {name: "id", value: "main", operation: "equals"}
        ],
        attributeLogic: "AND" // AND condition between attributes
    })
    .node({
        tag: "span",
        attributes: [
            {name: "data-label", value: "description", operation: "equals"}
        ]
    })
    .toString();
console.log(xpath2);