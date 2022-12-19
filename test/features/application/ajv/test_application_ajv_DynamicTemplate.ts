import typia from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicTemplate = 
    _test_application("ajv")(
        "DynamicTemplate",
        typia.application<[DynamicTemplate], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/DynamicTemplate"
        }
    ],
    components: {
        schemas: {
            DynamicTemplate: {
                $id: "components#/schemas/DynamicTemplate",
                type: "object",
                properties: {},
                patternProperties: {
                    "^(prefix_(.*))": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    "((.*)_postfix)$": {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    "^(value_-?\\d+\\.?\\d*)$": {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    "^(between_(.*)_and_-?\\d+\\.?\\d*)$": {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);