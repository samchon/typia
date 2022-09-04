import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_application } from "./_test_application";

export const test_application_tag_range = _test_application(
    "range tag",
    TSON.application<[TagRange]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagRange",
            },
        ],
        components: {
            schemas: {
                TagRange: {
                    type: "object",
                    properties: {
                        minimum: {
                            type: "number",
                            nullable: false,
                            minimum: 3,
                        },
                        maximum: {
                            type: "number",
                            nullable: false,
                            maximum: 7,
                        },
                        minimum_and_maximum: {
                            type: "number",
                            nullable: false,
                            minimum: 3,
                            maximum: 7,
                        },
                        greater: {
                            type: "number",
                            nullable: false,
                            exclusiveMinimum: 3,
                        },
                        greater_equal: {
                            type: "number",
                            nullable: false,
                            minimum: 3,
                        },
                        less: {
                            type: "number",
                            nullable: false,
                            exclusiveMaximum: 7,
                        },
                        less_equal: {
                            type: "number",
                            nullable: false,
                            maximum: 7,
                        },
                        greater_less: {
                            type: "number",
                            nullable: false,
                            exclusiveMinimum: 3,
                            exclusiveMaximum: 7,
                        },
                        greater_equal_less: {
                            type: "number",
                            nullable: false,
                            minimum: 3,
                            exclusiveMaximum: 7,
                        },
                        greater_less_equal: {
                            type: "number",
                            nullable: false,
                            exclusiveMinimum: 3,
                            maximum: 7,
                        },
                        greater_equal_less_equal: {
                            type: "number",
                            nullable: false,
                            minimum: 3,
                            maximum: 7,
                        },
                    },
                    nullable: false,
                    required: [
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
