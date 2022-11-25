import TSON from "../../../../src";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicEnumeration = _test_application("ajv")(
    "DynamicEnumeration",
    TSON.application<[DynamicEnumeration], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicEnumeration",
            },
        ],
        components: {
            schemas: {
                DynamicEnumeration: {
                    $id: "components#/schemas/DynamicEnumeration",
                    type: "object",
                    properties: {
                        ar: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "zh-Hans": {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        "zh-Hant": {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        en: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        fr: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        de: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        ja: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        ko: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        pt: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        ru: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                    },
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
