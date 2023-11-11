import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicUnion } from "../../../../structures/AtomicUnion";

export const test_json_application_ajv_AtomicUnion = _test_json_application(
    "ajv",
)("AtomicUnion")({
    schemas: [
        {
            $ref: "#/components/schemas/AtomicUnion",
        },
    ],
    components: {
        schemas: {
            AtomicUnion: {
                $id: "#/components/schemas/AtomicUnion",
                type: "array",
                items: {
                    $ref: "#/components/schemas/AtomicUnion.Union",
                },
            },
            "AtomicUnion.Union": {
                $id: "#/components/schemas/AtomicUnion.Union",
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
    purpose: "ajv",
});
