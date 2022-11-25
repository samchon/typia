import TSON from "../../../../src";
import { SetSimple } from "../../../structures/SetSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_SetSimple = _test_application("ajv")(
    "SetSimple",
    TSON.application<[SetSimple], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/SetSimple",
            },
        ],
        components: {
            schemas: {
                SetSimple: {
                    $id: "components#/schemas/SetSimple",
                    type: "object",
                    properties: {
                        booleans: {
                            $ref: "#/components/schemas/Set",
                            "x-tson-required": true,
                        },
                        numbers: {
                            $ref: "#/components/schemas/Set",
                            "x-tson-required": true,
                        },
                        strings: {
                            $ref: "#/components/schemas/Set",
                            "x-tson-required": true,
                        },
                        arrays: {
                            $ref: "#/components/schemas/Set",
                            "x-tson-required": true,
                        },
                        objects: {
                            $ref: "#/components/schemas/Set",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: [
                        "booleans",
                        "numbers",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    "x-tson_jsDocTags": [],
                },
                Set: {
                    type: "object",
                    $id: "components#/schemas/Set",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
