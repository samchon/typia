import TSON from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_application } from "./_test_application";

export const test_application_atomic = _test_application(
    "atomic",
    TSON.application<[AtomicSimple]>(),
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
                        type: "number",
                        nullable: false
                    },
                    {
                        type: "string",
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