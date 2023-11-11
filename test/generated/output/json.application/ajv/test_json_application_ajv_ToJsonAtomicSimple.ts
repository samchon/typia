import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicSimple } from "../../../../structures/ToJsonAtomicSimple";

export const test_json_application_ajv_ToJsonAtomicSimple =
    _test_json_application("ajv")("ToJsonAtomicSimple")({
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonAtomicSimple",
            },
        ],
        components: {
            schemas: {
                ToJsonAtomicSimple: {
                    $id: "#/components/schemas/ToJsonAtomicSimple",
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
        purpose: "ajv",
    });
