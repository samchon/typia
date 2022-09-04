import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_application } from "./_test_application";

export const test_application_tag_array = _test_application(
    "array tag",
    TSON.application<[TagArray]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagArray",
            },
        ],
        components: {
            schemas: {
                TagArray: {
                    type: "object",
                    properties: {
                        items: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                                format: "uuid",
                            },
                            nullable: false,
                            minItems: 3,
                            maxItems: 6,
                        },
                        minItems: {
                            type: "array",
                            items: {
                                type: "number",
                                nullable: false,
                                minimum: 3,
                            },
                            nullable: false,
                            minItems: 3,
                        },
                        maxItems: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: false,
                                        maxLength: 7,
                                    },
                                    {
                                        type: "number",
                                        nullable: false,
                                        maximum: 7,
                                    },
                                ],
                            },
                            nullable: false,
                            maxItems: 7,
                        },
                        both: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false,
                                format: "uuid",
                            },
                            nullable: false,
                            minItems: 3,
                            maxItems: 7,
                        },
                    },
                    nullable: false,
                    required: ["items", "minItems", "maxItems", "both"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
