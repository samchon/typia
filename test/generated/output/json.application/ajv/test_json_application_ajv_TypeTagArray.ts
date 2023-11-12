import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TypeTagArray } from "../../../../structures/TypeTagArray";

export const test_json_application_ajv_TypeTagArray = _test_json_application(
    "ajv",
)("TypeTagArray")({
    schemas: [
        {
            $ref: "#/components/schemas/TypeTagArray",
        },
    ],
    components: {
        schemas: {
            TypeTagArray: {
                $id: "#/components/schemas/TypeTagArray",
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/TypeTagArray.Type",
                        },
                    },
                },
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
            "TypeTagArray.Type": {
                $id: "#/components/schemas/TypeTagArray.Type",
                type: "object",
                properties: {
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
                    minItems: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            "x-typia-typeTags": [
                                {
                                    target: "number",
                                    name: "Minimum<3>",
                                    kind: "minimum",
                                    value: 3,
                                    validate: "3 <= $input",
                                    exclusive: ["minimum", "exclusiveMinimum"],
                                },
                            ],
                        },
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
                        ],
                    },
                    both: {
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
                        maxItems: 7,
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
                                name: "MaxItems<7>",
                                kind: "maxItems",
                                value: 7,
                                validate: "$input.length <= 7",
                                exclusive: true,
                            },
                        ],
                    },
                    equal: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            maximum: 10,
                            minimum: 10,
                            "x-typia-typeTags": [
                                {
                                    target: "number",
                                    name: "Minimum<10>",
                                    kind: "minimum",
                                    value: 10,
                                    validate: "10 <= $input",
                                    exclusive: ["minimum", "exclusiveMinimum"],
                                },
                                {
                                    target: "number",
                                    name: "Maximum<10>",
                                    kind: "maximum",
                                    value: 10,
                                    validate: "$input <= 10",
                                    exclusive: ["maximum", "exclusiveMaximum"],
                                },
                            ],
                        },
                        maxItems: 10,
                        minItems: 10,
                        "x-typia-typeTags": [
                            {
                                target: "array",
                                name: "MinItems<10>",
                                kind: "minItems",
                                value: 10,
                                validate: "10 <= $input.length",
                                exclusive: true,
                            },
                            {
                                target: "array",
                                name: "MaxItems<10>",
                                kind: "maxItems",
                                value: 10,
                                validate: "$input.length <= 10",
                                exclusive: true,
                            },
                        ],
                    },
                },
                required: ["items", "minItems", "both", "equal"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
