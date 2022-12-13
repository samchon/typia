import TSON from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_AtomicUnion = 
    _test_application("ajv")(
        "AtomicUnion",
        TSON.application<[AtomicUnion], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "string",
                        nullable: true
                    },
                    {
                        type: "number",
                        nullable: true
                    },
                    {
                        type: "boolean",
                        nullable: true
                    }
                ]
            },
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