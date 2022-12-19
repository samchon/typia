import typia from "../../../../src";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonArray = 
    _test_application("ajv")(
        "ToJsonArray",
        typia.application<[ToJsonArray], "ajv">(),{schemas: [
        {
            type: "array",
            items: [
                {
                    type: "array",
                    items: {
                        type: "boolean",
                        nullable: false
                    },
                    nullable: false
                },
                {
                    type: "array",
                    items: {
                        type: "number",
                        nullable: false
                    },
                    nullable: false
                },
                {
                    type: "array",
                    items: {
                        type: "string",
                        nullable: false
                    },
                    nullable: false
                },
                {
                    type: "array",
                    items: {
                        $ref: "components#/schemas/ToJsonArray.IObject"
                    },
                    nullable: false
                }
            ],
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ToJsonArray.IObject": {
                $id: "components#/schemas/ToJsonArray.IObject",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);