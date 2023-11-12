import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagMatrix } from "../../../../structures/TypeTagMatrix";

export const test_json_application_swagger_TypeTagMatrix =
    _test_json_application("swagger")("TypeTagMatrix")({
        schemas: [
            {
                $ref: "#/components/schemas/TypeTagMatrix",
            },
        ],
        components: {
            schemas: {
                TypeTagMatrix: {
                    type: "object",
                    properties: {
                        matrix: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "array",
                                items: {
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    format: "uuid",
                                    "x-typia-typeTags": [
                                        {
                                            target: "string",
                                            name: 'Format<"uuid">',
                                            kind: "format",
                                            value: "uuid",
                                            validate:
                                                "/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)",
                                            exclusive: ["format", "pattern"],
                                        },
                                    ],
                                },
                                maxItems: 4,
                                minItems: 4,
                                "x-typia-typeTags": [
                                    {
                                        target: "array",
                                        name: "MinItems<4>",
                                        kind: "minItems",
                                        value: 4,
                                        validate: "4 <= $input.length",
                                        exclusive: true,
                                    },
                                    {
                                        target: "array",
                                        name: "MaxItems<4>",
                                        kind: "maxItems",
                                        value: 4,
                                        validate: "$input.length <= 4",
                                        exclusive: true,
                                    },
                                ],
                            },
                            maxItems: 3,
                            minItems: 3,
                            "x-typia-typeTags": [
                                {
                                    target: "array",
                                    name: "MinItems<3>",
                                    kind: "minItems",
                                    value: 3,
                                    validate: "3 <= $input.length",
                                    exclusive: true,
                                },
                                {
                                    target: "array",
                                    name: "MaxItems<3>",
                                    kind: "maxItems",
                                    value: 3,
                                    validate: "$input.length <= 3",
                                    exclusive: true,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["matrix"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
