import {NodeBuilder} from "../src/NodeBuilder";

describe('XNodeBuilder', () => {
    it('should create a node successfully', () => {
        const nodeBuilder = new NodeBuilder("*").with("id", "ele-id")
            .index(1)
            .build();
        expect(nodeBuilder).toEqual({
            tag: "*",
            attributes: [{name: "@id", value: "ele-id", operation: "equals"}],
            condition: undefined,
            index: 1,
            isAbsolute: false
        });
    });
});