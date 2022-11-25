import TSON from "../../../../src";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicTree = _test_application("ajv")(
    "DynamicTree",
    TSON.application<[DynamicTree], "ajv">(),
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
                            "x-tson-required": true,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        children: {
                            $ref: "components#/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id", "sequence", "children"],
                    "x-tson_jsDocTags": [],
                },
                Record_lt_string_comma__space_DynamicTree_gt_: {
                    $id: "components#/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                    type: "object",
                    properties: {},
                    additionalProperties: {
                        $ref: "components#/schemas/DynamicTree",
                        "x-tson-required": true,
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
