import TSON from "../../../../src";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_constant_atomic_wrapper =
    _test_application_swagger(
        "wrapped atomic constant",
        TSON.application<[ConstantAtomicWrapper], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_boolean_gt_",
                            },
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_number_gt_",
                            },
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointer_lt_string_gt_",
                            },
                        ],
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ConstantAtomicWrapper.IPointer_lt_boolean_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "boolean",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ConstantAtomicWrapper.IPointer_lt_number_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                    "ConstantAtomicWrapper.IPointer_lt_string_gt_": {
                        type: "object",
                        properties: {
                            value: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
