import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_tag_atomic_union = _test_application(
    "atomic union tag",
    TSON.application<[TagAtomicUnion]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagAtomicUnion",
            },
        ],
        components: {
            schemas: {
                TagAtomicUnion: {
                    type: "object",
                    properties: {
                        value: {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    metaTags: [
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
                                    jsDocTags: [
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
                                    minLength: 3,
                                    maxLength: 7,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    metaTags: [
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
                                    jsDocTags: [
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
                                    minimum: 3,
                                },
                            ],
                            metaTags: [
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
                            jsDocTags: [
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
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
