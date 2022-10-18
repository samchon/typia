import TSON from "../../../../src";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_constant_atomic_wrapper =
    _test_application_ajv(
        "wrapped atomic constant",
        TSON.application<[ConstantAtomicWrapper], "ajv">(),
        {
            schemas: [
                {
                    type: "array",
                    items: [
                        {
                            $ref: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                        },
                        {
                            $ref: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                        },
                        {
                            $ref: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                        },
                    ],
                    nullable: false,
                },
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
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ConstantAtomicWrapper.IPointer_lt_number_gt_": {
                        $id: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ConstantAtomicWrapper.IPointer_lt_string_gt_": {
                        $id: "components#/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                        type: "object",
                        properties: {
                            value: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "ajv",
            prefix: "components#/schemas",
        },
    );
