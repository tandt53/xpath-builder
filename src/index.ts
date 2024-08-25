import {XpathBuilder} from "./XpathBuilder";
import {Attribute, Condition} from "./XNode";
import {IXpath} from "./IXpath";

const xpath = new XpathBuilder()
    .node({
        tag: "div",
        attributes: [
            {name: "class", value: "container", operation: "contains"},
            {name: "id", value: "main", operation: "equals"}
        ],
        condition: "OR" // OR condition between attributes
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
    .build();

console.log(xpath);

const xpath2 = new XpathBuilder()
    .node({
        tag: "div",
        attributes: [
            {name: "class", value: "container", operation: "contains"},
            {name: "id", value: "main", operation: "equals"}
        ],
        condition: "AND" // AND condition between attributes
    })
    .node({
        tag: "span",
        attributes: [
            {name: "data-label", value: "description", operation: "equals"}
        ]
    })
    .build();
console.log(xpath2);


// custom xpath function
export function h1(attributes?: Attribute[], attributeLogic?: Condition, index?: number, isAbsolute?: boolean): IXpath {
    return new XpathBuilder().node({
        tag: "h1",
        attributes,
        condition: attributeLogic,
        index,
        isAbsolute
    });
}

const h1Xpath = h1().build();
console.log(h1Xpath);
// Output: //h1

const xpath3 = new XpathBuilder().node({
    tag: 'div',
    attributes: [
        {
            name: 'id',
            value: 'some-id',
            operation: 'contains'
        }, {
            name: 'class',
            value: 'some-class'
        }
    ],
    condition: 'OR'
}).build();

console.log(xpath3);