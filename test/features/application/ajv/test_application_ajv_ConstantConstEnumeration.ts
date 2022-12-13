import TSON from "../../../../src";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ConstantConstEnumeration = 
    _test_application("ajv")(
        "ConstantConstEnumeration",
        TSON.application<[ConstantConstEnumeration], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "number",
                        "enum": [
                            0,
                            1,
                            2
                        ],
                        nullable: false
                    },
                    {
                        type: "string",
                        "enum": [
                            "Three",
                            "Four"
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
    purpose: "ajv",
    prefix: "components#/schemas"
}
);