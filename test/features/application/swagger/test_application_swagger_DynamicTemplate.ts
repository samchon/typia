import typia from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicTemplate = 
    _test_application("swagger")(
        "DynamicTemplate",
        typia.application<[DynamicTemplate], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/DynamicTemplate"
        }
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
                            "x-typia-required": true
                        },
                        {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true
                        },
                        {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true
                        },
                        {
                            type: "boolean",
                            nullable: false,
                            "x-typia-required": true
                        }
                    ]
                },
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);