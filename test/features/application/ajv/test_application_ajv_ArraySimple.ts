import typia from "../../../../src";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArraySimple = _test_application("ajv")(
    "ArraySimple",
    typia.application<[ArraySimple], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/ArraySimple.IPerson",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ArraySimple.IPerson": {
                    $id: "components#/schemas/ArraySimple.IPerson",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        hobbies: {
                            oneOf: [
                                {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        nullable: false,
                                        "x-typia-required": true,
                                    },
                                    nullable: false,
                                    "x-typia-required": true,
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "components#/schemas/ArraySimple.IHobby",
                                        "x-typia-required": true,
                                    },
                                    nullable: false,
                                    "x-typia-required": true,
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "components#/schemas/ArraySimple.IContent",
                                        "x-typia-required": true,
                                    },
                                    nullable: false,
                                    "x-typia-required": true,
                                },
                            ],
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["name", "email", "hobbies"],
                    "x-typia_jsDocTags": [],
                },
                "ArraySimple.IHobby": {
                    $id: "components#/schemas/ArraySimple.IHobby",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        rank: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["name", "rank"],
                    "x-typia_jsDocTags": [],
                },
                "ArraySimple.IContent": {
                    $id: "components#/schemas/ArraySimple.IContent",
                    type: "object",
                    properties: {
                        body: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["body"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
