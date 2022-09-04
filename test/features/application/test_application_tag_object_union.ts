import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_application } from "./_test_application";

export const test_application_tag_object_union = _test_application(
    "object union tag",
    TSON.application<[TagObjectUnion]>(),
    {
        schemas: [
            {
                oneOf: [
                    {
                        $ref: "#/components/schemas/TagObjectUnion.Literal",
                    },
                    {
                        $ref: "#/components/schemas/TagObjectUnion.Numeric",
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "TagObjectUnion.Literal": {
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                            minLength: 3,
                            maxLength: 7,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                },
                "TagObjectUnion.Numeric": {
                    type: "object",
                    properties: {
                        value: {
                            type: "number",
                            nullable: false,
                            minimum: 3,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
