import typia from "../../../../src";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicTree = 
    _test_application("swagger")(
        "DynamicTree",
        typia.application<[DynamicTree], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/DynamicTree"
        }
    ],
    components: {
        schemas: {
            DynamicTree: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    sequence: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    children: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "sequence",
                    "children"
                ],
                "x-typia_jsDocTags": []
            },
            Record_lt_string_comma__space_DynamicTree_gt_: {
                type: "object",
                properties: {},
                additionalProperties: {
                    $ref: "#/components/schemas/DynamicTree",
                    "x-typia-required": true
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