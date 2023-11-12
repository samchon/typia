import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../../structures/ConstantAtomicWrapper";

export const test_json_application_swagger_ConstantAtomicWrapper =
    _test_json_application("swagger")("ConstantAtomicWrapper")({
        schemas: [
            {
                $ref: "#/components/schemas/ConstantAtomicWrapper",
            },
        ],
        components: {
            schemas: {
                ConstantAtomicWrapper: {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerboolean",
                            },
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
                            },
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
                            },
                        ],
                    },
                    minItems: 3,
                    maxItems: 3,
                    "x-typia-tuple": {
                        type: "array",
                        items: [
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerboolean",
                            },
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointernumber",
                            },
                            {
                                $ref: "#/components/schemas/ConstantAtomicWrapper.IPointerstring",
                            },
                        ],
                        minItems: 3,
                        maxItems: 3,
                    },
                },
                "ConstantAtomicWrapper.IPointerboolean": {
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
                "ConstantAtomicWrapper.IPointernumber": {
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
                "ConstantAtomicWrapper.IPointerstring": {
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
