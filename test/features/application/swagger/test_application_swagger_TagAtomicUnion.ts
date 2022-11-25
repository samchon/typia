import TSON from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_TagAtomicUnion = _test_application(
    "swagger",
)("TagAtomicUnion", TSON.application<[TagAtomicUnion], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/TagAtomicUnion.Type",
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "TagAtomicUnion.Type": {
                type: "object",
                properties: {
                    value: {
                        oneOf: [
                            {
                                type: "string",
                                nullable: false,
                                "x-tson-metaTags": [
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                    {
                                        kind: "length",
                                        minimum: {
                                            include: true,
                                            value: 3,
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7,
                                        },
                                    },
                                ],
                                "x-tson-jsDocTags": [
                                    {
                                        name: "minimum",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "length",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                                "x-tson-required": true,
                                minLength: 3,
                                maxLength: 7,
                            },
                            {
                                type: "number",
                                nullable: false,
                                "x-tson-metaTags": [
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                    {
                                        kind: "length",
                                        minimum: {
                                            include: true,
                                            value: 3,
                                        },
                                        maximum: {
                                            include: true,
                                            value: 7,
                                        },
                                    },
                                ],
                                "x-tson-jsDocTags": [
                                    {
                                        name: "minimum",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "length",
                                        text: [
                                            {
                                                text: "[3, 7]",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                                "x-tson-required": true,
                                minimum: 3,
                            },
                        ],
                        "x-tson-metaTags": [
                            {
                                kind: "minimum",
                                value: 3,
                            },
                            {
                                kind: "length",
                                minimum: {
                                    include: true,
                                    value: 3,
                                },
                                maximum: {
                                    include: true,
                                    value: 7,
                                },
                            },
                        ],
                        "x-tson-jsDocTags": [
                            {
                                name: "minimum",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text",
                                    },
                                ],
                            },
                            {
                                name: "length",
                                text: [
                                    {
                                        text: "[3, 7]",
                                        kind: "text",
                                    },
                                ],
                            },
                        ],
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["value"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
