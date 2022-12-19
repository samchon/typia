import typia from "../../../../src";
import { FunctionalTupleUnion } from "../../../structures/FunctionalTupleUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_FunctionalTupleUnion = 
    _test_application("ajv")(
        "FunctionalTupleUnion",
        typia.application<[FunctionalTupleUnion], "ajv">(),{schemas: [
        {
            type: "array",
            items: [
                {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true
                        },
                        {
                            type: "number",
                            nullable: true
                        }
                    ]
                },
                {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true
                        },
                        {
                            type: "number",
                            nullable: true
                        }
                    ]
                },
                {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true
                        },
                        {
                            type: "number",
                            nullable: true
                        }
                    ]
                },
                {
                    oneOf: [
                        {
                            type: "string",
                            nullable: true
                        },
                        {
                            type: "number",
                            nullable: true
                        }
                    ]
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