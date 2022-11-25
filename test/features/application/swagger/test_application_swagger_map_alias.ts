import TSON from "../../../../src";
import { SetAlias } from "../../../structures/SetAlias";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_set_alias = _test_application_swagger(
    "alias set",
    TSON.application<[SetAlias], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/SetAlias",
            },
        ],
        components: {
            schemas: {
                SetAlias: {
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
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
