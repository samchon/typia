import TSON from "../../../../src";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantAtomicWrapper = 
    _test_application("ajv")(
        "ConstantAtomicWrapper",
        TSON.application<[ConstantAtomicWrapper], "ajv">(),{schemas: [
        {
            type: "array",
            items: [
                {
                    $ref: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_"
                },
                {
                    $ref: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_"
                },
                {
                    $ref: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_"
                }
            ],
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ConstantAtomicWrapper.IPointer_lt_boolean_gt_": {
                $id: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                type: "object",
                properties: {
                    value: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "ConstantAtomicWrapper.IPointer_lt_number_gt_": {
                $id: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                type: "object",
                properties: {
                    value: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            },
            "ConstantAtomicWrapper.IPointer_lt_string_gt_": {
                $id: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                type: "object",
                properties: {
                    value: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);