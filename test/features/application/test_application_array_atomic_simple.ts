import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_application } from "./_test_application";

export const test_application_array_atomic_simple = _test_application(
    "atomic array",
    TSON.application<[ArrayAtomicSimple]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "oneOf",
                oneOf: [
                    {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "enum",
                            "enum": [
                                false,
                                true
                            ],
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "number",
                            type: "number",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "string",
                            type: "string",
                            nullable: false
                        },
                        nullable: false
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {}
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);