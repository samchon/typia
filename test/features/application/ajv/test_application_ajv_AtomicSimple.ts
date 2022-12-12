import TSON from "../../../../src";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicSimple = 
    _test_application("ajv")(
        "AtomicSimple",
        TSON.application<[AtomicSimple], "ajv">(),{schemas: [
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