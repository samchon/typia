import TSON from "../../../../src";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayAny = _test_application("ajv")(
    "ArrayAny",
    TSON.application<[ArrayAny], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ArrayAny",
            },
        ],
        components: {
            schemas: {
                ArrayAny: {
                    $id: "components#/schemas/ArrayAny",
                    type: "object",
                    properties: {
                        anys: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-tson-required": true,
                        },
                        undefindable1: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-tson-required": false,
                        },
                        undefindable2: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-tson-required": false,
                        },
                        nullables1: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-tson-required": true,
                        },
                        nullables2: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-tson-required": true,
                        },
                        both1: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-tson-required": false,
                        },
                        both2: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-tson-required": false,
                        },
                        both3: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-tson-required": false,
                        },
                        union: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["anys", "nullables1", "nullables2", "union"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
