# XPATH BUILDER

## Description

This is a simple tool to build XPATH for automation tests (Web android Mobile).
User can customize the XPATH by selecting the attributes and the values of the attributes.

## How to use

### Create a XPath with tag and 1 attribute

```ts
import {XpathBuilder} from 'xpath-builder';

const xpath = new XpathBuilder().node({
    tag: 'div',
    attributes: [{
        name: 'id',
        value: 'some-id'
    }]
}).build();

console.log(xpath);
// Output: //div[@id='some-id']
```

### Create a XPath with tag and multiple attributes

```ts
import {XpathBuilder} from 'xpath-builder';

const xpath = new XpathBuilder().node({
    tag: 'div',
    attributes: [
        {
            name: 'id',
            value: 'some-id'
        }, {
            name: 'class',
            value: 'some-class'
        }
    ]
}).build();

console.log(xpath);
// Output: //div[@id='some-id' and @class='some-class']
```

### Create a XPath with tag and multiple attributes with OR condition

```ts
import {XpathBuilder} from 'xpath-builder';

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
// Output: //div[contains(@id, 'some-id') or @class='some-class']
```

### Create a XPath with axis

```ts
import {XpathBuilder} from "./XpathBuilder";

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
// Output: //div[contains(@class, 'container') or @id='main']//child::span[@data-label='description']//ancestor::section//preceding-sibling::h1
```

### Custom XPath function
```ts
import {XpathBuilder} from "./XpathBuilder";
import {Attribute, Condition} from "./XNode";
import {IXpath} from "./IXpath";

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
// Output: //h1
```