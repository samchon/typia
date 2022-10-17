import TSON from "../../../../src";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_array_simple = _test_application_ajv(
    "simple array",
    TSON.application<[ArraySimple], "ajv">(),
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
                        },
                        email: {
                            type: "string",
                            nullable: false,
                        },
                        hobbies: {
                            oneOf: [
                                {
                                    type: "array",
                                    items: {
                                        type: "string",
                                        nullable: false,
                                    },
                                    nullable: false,
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "components#/schemas/ArraySimple.IHobby",
                                    },
                                    nullable: false,
                                },
                                {
                                    type: "array",
                                    items: {
                                        $ref: "components#/schemas/ArraySimple.IContent",
                                    },
                                    nullable: false,
                                },
                            ],
                        },
                    },
                    nullable: false,
                    required: ["name", "email", "hobbies"],
                    "x-tson_jsDocTags": [],
                },
                "ArraySimple.IHobby": {
                    $id: "components#/schemas/ArraySimple.IHobby",
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            nullable: false,
                        },
                        rank: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "rank"],
                    "x-tson_jsDocTags": [],
                },
                "ArraySimple.IContent": {
                    $id: "components#/schemas/ArraySimple.IContent",
                    type: "object",
                    properties: {
                        body: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["body"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
