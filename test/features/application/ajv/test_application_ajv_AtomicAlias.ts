import TSON from "../../../../src";
import { AtomicAlias } from "../../../structures/AtomicAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicAlias = 
    _test_application("ajv")(
        "AtomicAlias",
        TSON.application<[AtomicAlias], "ajv">(),{schemas: [
        {
            type: "array",
            items: [
                {
                    type: "boolean",
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
            ],
            nullable: false
        }
    ],
    components: {
        schemas: {}
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);