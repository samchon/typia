import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_application } from "./_test_application";

export const test_application_array_simple = _test_application(
    "simple array",
    TSON.application<[ArraySimple]>(),
{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ArraySimple.IPerson"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ArraySimple.IPerson": {
                $id: "ArraySimple.IPerson",
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false
                    },
                    email: {
                        type: "string",
                        nullable: false
                    },
                    hobbies: {
                        oneOf: [
                            {
                                type: "array",
                                items: {
                                    type: "string",
                                    nullable: false
                                },
                                nullable: false
                            },
                            {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ArraySimple.IHobby"
                                },
                                nullable: false
                            },
                            {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/ArraySimple.IContent"
                                },
                                nullable: false
                            }
                        ]
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "email",
                    "hobbies"
                ]
            },
            "ArraySimple.IHobby": {
                $id: "ArraySimple.IHobby",
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false
                    },
                    rank: {
                        type: "number",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "rank"
                ]
            },
            "ArraySimple.IContent": {
                $id: "ArraySimple.IContent",
                type: "object",
                properties: {
                    body: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "body"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);