import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_application } from "./_test_application";

export const test_application_array_simple = _test_application(
    "simple array",
    TSON.application<[ArraySimple]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "reference",
                $ref: "#/components/schemas/ArraySimple.IPerson"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ArraySimple.IPerson": {
                $id: "ArraySimple.IPerson",
                $type: "object",
                type: "object",
                properties: {
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    email: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    hobbies: {
                        $type: "oneOf",
                        oneOf: [
                            {
                                type: "array",
                                $type: "array",
                                items: {
                                    $type: "string",
                                    type: "string",
                                    nullable: false
                                },
                                nullable: false
                            },
                            {
                                type: "array",
                                $type: "array",
                                items: {
                                    $type: "reference",
                                    $ref: "#/components/schemas/ArraySimple.IHobby"
                                },
                                nullable: false
                            },
                            {
                                type: "array",
                                $type: "array",
                                items: {
                                    $type: "reference",
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
                $type: "object",
                type: "object",
                properties: {
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    rank: {
                        $type: "number",
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
                $type: "object",
                type: "object",
                properties: {
                    body: {
                        $type: "string",
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