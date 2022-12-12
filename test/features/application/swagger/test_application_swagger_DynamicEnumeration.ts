import typia from "../../../../src";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicEnumeration = _test_application(
    "swagger",
)("DynamicEnumeration", typia.application<[DynamicEnumeration], "swagger">(), {
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
                        "x-typia-required": false,
                    },
                    "zh-Hans": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    "zh-Hant": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    en: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    fr: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    de: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    ja: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    ko: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    pt: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    ru: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false,
                    },
                },
                nullable: false,
                "x-typia_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
