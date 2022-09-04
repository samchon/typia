import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_application } from "./_test_application";

export const test_application_tag_tuple = _test_application(
    "tuple tag",
    TSON.application<[TagTuple]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagTuple",
            },
        ],
        components: {
            schemas: {
                TagTuple: {
                    type: "object",
                    properties: {
                        tuple: {
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: false,
                                        minLength: 3,
                                        maxLength: 7,
                                    },
                                    {
                                        type: "number",
                                        nullable: false,
                                        minimum: 3,
                                        maximum: 7,
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            type: "string",
                                            nullable: false,
                                            minLength: 3,
                                            maxLength: 7,
                                        },
                                        nullable: false,
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                    {
                                        type: "array",
                                        items: {
                                            type: "number",
                                            nullable: false,
                                            minimum: 3,
                                            maximum: 7,
                                        },
                                        nullable: false,
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                ],
                            },
                            nullable: false,
                            minItems: 3,
                            maxItems: 7,
                        },
                    },
                    nullable: false,
                    required: ["tuple"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
