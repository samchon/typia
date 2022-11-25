import TSON from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicTemplate = _test_application(
    "swagger",
)("DynamicTemplate", TSON.application<[DynamicTemplate], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicTemplate",
        },
    ],
    components: {
        schemas: {
            DynamicTemplate: {
                type: "object",
                properties: {},
                additionalProperties: {
                    oneOf: [
                        {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    ],
                },
                nullable: false,
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
