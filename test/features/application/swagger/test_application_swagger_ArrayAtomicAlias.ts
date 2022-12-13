import TSON from "../../../../src";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ArrayAtomicAlias = 
    _test_application("swagger")(
        "ArrayAtomicAlias",
        TSON.application<[ArrayAtomicAlias], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "array",
                        items: {
                            type: "boolean",
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