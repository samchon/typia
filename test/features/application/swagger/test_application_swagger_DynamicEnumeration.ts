import TSON from "../../../../src";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicEnumeration = _test_application(
    "swagger",
)("DynamicEnumeration", TSON.application<[DynamicEnumeration], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicEnumeration",
        },
    ],
    components: {
        schemas: {
            DynamicEnumeration: {
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
    purpose: "swagger",
    prefix: "#/components/schemas",
});
