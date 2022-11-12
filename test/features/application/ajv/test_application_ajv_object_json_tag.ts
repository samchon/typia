import TSON from "../../../../src";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_json_tag = _test_application_ajv(
    "json schema tagged object",
    TSON.application<[ObjectJsonTag], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectJsonTag",
            },
        ],
        components: {
            schemas: {
                ObjectJsonTag: {
                    $id: "components#/schemas/ObjectJsonTag",
                    type: "object",
                    properties: {
                        vulnerable: {
                            type: "string",
                            nullable: false,
                            deprecated: true,
                            "x-tson-jsDocTags": [
                                {
                                    name: "deprecated",
                                },
                            ],
                            "x-tson-required": true,
                        },
                        description: {
                            type: "string",
                            nullable: false,
                            description: "Descripted property.",
                            "x-tson-required": true,
                        },
                        title: {
                            type: "string",
                            nullable: false,
                            title: "something",
                            description: "Titled property.",
                            "x-tson-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                        complicate_title: {
                            type: "string",
                            nullable: false,
                            title: "something weirdo with {@link something } tag",
                            description: "Complicate title.",
                            "x-tson-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something weirdo with ",
                                            kind: "text",
                                        },
                                        {
                                            text: "{@link ",
                                            kind: "link",
                                        },
                                        {
                                            text: "something ",
                                            kind: "linkText",
                                        },
                                        {
                                            text: "}",
                                            kind: "link",
                                        },
                                        {
                                            text: " tag",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                        entered_title: {
                            type: "string",
                            nullable: false,
                            title: "something content with\nenter and\nnew line",
                            description: "Entered title.",
                            "x-tson-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something content with\nenter and\nnew line",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "vulnerable",
                        "description",
                        "title",
                        "complicate_title",
                        "entered_title",
                    ],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
