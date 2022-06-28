import TSON from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_application } from "./_test_application";

export const test_application_atomic_alias = _test_application(
    "generic alias",
    TSON.application<[AtomicAlias]>(),
{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
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