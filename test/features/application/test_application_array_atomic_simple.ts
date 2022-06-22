import TSON from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_application } from "./_test_application";

export const test_application_array_atomic_simple = _test_application(
    "atomic array",
    TSON.application<[ArrayAtomicSimple]>(),
{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "array",
                        items: {
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
                        items: {
                            type: "number",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
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