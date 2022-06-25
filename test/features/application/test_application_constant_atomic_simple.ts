import TSON from "../../../src";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";
import { _test_application } from "./_test_application";

export const test_application_constant_atomic_simple = _test_application(
    "constant atomic",
    TSON.application<[ConstantAtomicSimple]>(),
{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        "enum": [
                            false,
                            true
                        ],
                        nullable: false
                    },
                    {
                        "enum": [
                            2
                        ],
                        nullable: false
                    },
                    {
                        "enum": [
                            "three"
                        ],
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