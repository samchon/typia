import typia from "../../../../src";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayAny = _test_application("swagger")(
    "ArrayAny",
    typia.application<[ArrayAny], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ArrayAny",
            },
        ],
        components: {
            schemas: {
                ArrayAny: {
                    type: "object",
                    properties: {
                        anys: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-typia-required": true,
                        },
                        undefindable1: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-typia-required": false,
                        },
                        undefindable2: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-typia-required": false,
                        },
                        nullables1: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-typia-required": true,
                        },
                        nullables2: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-typia-required": true,
                        },
                        both1: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-typia-required": false,
                        },
                        both2: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-typia-required": false,
                        },
                        both3: {
                            type: "array",
                            items: {},
                            nullable: true,
                            "x-typia-required": false,
                        },
                        union: {
                            type: "array",
                            items: {},
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["anys", "nullables1", "nullables2", "union"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
