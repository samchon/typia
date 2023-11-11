import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_json_application_ajv_ToJsonAtomicUnion =
    _test_json_application("ajv")("ToJsonAtomicUnion")({
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonAtomicUnion",
            },
        ],
        components: {
            schemas: {
                ToJsonAtomicUnion: {
                    $id: "#/components/schemas/ToJsonAtomicUnion",
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                type: "null",
                            },
                            {
                                type: "string",
                            },
                            {
                                type: "number",
                            },
                            {
                                type: "boolean",
                            },
                        ],
                    },
                },
            },
        },
        purpose: "ajv",
    });
