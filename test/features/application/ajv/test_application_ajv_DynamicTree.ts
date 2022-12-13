import typia from "../../../../src";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicTree = _test_application("ajv")(
    "DynamicTree",
    typia.application<[DynamicTree], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicTree",
            },
        ],
        components: {
            schemas: {
                DynamicTree: {
                    $id: "components#/schemas/DynamicTree",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        children: {
                            $ref: "components#/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "sequence", "children"],
                    "x-typia_jsDocTags": [],
                },
                Record_lt_string_comma__space_DynamicTree_gt_: {
                    $id: "components#/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                    type: "object",
                    properties: {},
                    additionalProperties: {
                        $ref: "components#/schemas/DynamicTree",
                        "x-typia-required": true,
                    },
                    nullable: false,
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
