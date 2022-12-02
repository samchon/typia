import TSON from "../../../../src";
import { SetAlias } from "../../../structures/SetAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_SetAlias = _test_application("ajv")(
    "SetAlias",
    TSON.application<[SetAlias], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/SetAlias",
            },
        ],
        components: {
            schemas: {
                SetAlias: {
                    $id: "components#/schemas/SetAlias",
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
