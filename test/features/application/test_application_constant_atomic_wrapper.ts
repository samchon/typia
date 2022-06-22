import TSON from "../../../src";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";
import { _test_application } from "./_test_application";

export const test_application_constant_atomic_wrapper = _test_application(
    "wrapped atomic constant",
    TSON.application<[ConstantAtomicWrapper]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "oneOf",
                oneOf: [
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/IPointer_lt_boolean_gt_"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/IPointer_lt_number_gt_"
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/IPointer_lt_string_gt_"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            IPointer_lt_boolean_gt_: {
                $id: "IPointer_lt_boolean_gt_",
                $type: "object",
                type: "object",
                properties: {
                    value: {
                        $type: "enum",
                        "enum": [
                            false,
                            true
                        ],
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "value"
                ]
            },
            IPointer_lt_number_gt_: {
                $id: "IPointer_lt_number_gt_",
                $type: "object",
                type: "object",
                properties: {
                    value: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "value"
                ]
            },
            IPointer_lt_string_gt_: {
                $id: "IPointer_lt_string_gt_",
                $type: "object",
                type: "object",
                properties: {
                    value: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "value"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);