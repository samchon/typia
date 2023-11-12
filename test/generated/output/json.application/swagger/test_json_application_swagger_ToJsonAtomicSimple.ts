import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../../structures/ToJsonAtomicSimple";

export const test_json_application_swagger_ToJsonAtomicSimple =
    _test_json_application("swagger")("ToJsonAtomicSimple")({
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonAtomicSimple",
            },
        ],
        components: {
            schemas: {
                ToJsonAtomicSimple: {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                type: "boolean",
                            },
                            {
                                type: "number",
                            },
                            {
                                type: "string",
                            },
                        ],
                    },
                    minItems: 3,
                    maxItems: 3,
                    "x-typia-tuple": {
                        type: "array",
                        items: [
                            {
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "boolean",
                            },
                            {
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                            {
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                            },
                        ],
                        minItems: 3,
                        maxItems: 3,
                    },
                },
            },
        },
        purpose: "swagger",
    });
