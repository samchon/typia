import TSON from "../../../../src";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleRestArray = 
    _test_application("ajv")(
        "TupleRestArray",
        TSON.application<[TupleRestArray], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                        nullable: false
                    },
                    {
                        type: "number",
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            type: "array",
                            items: {
                                type: "string",
                                nullable: false
                            },
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
    purpose: "ajv",
    prefix: "components#/schemas"
}
);