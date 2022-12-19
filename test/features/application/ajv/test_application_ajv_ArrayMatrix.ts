import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ArrayMatrix = 
    _test_application("ajv")(
        "ArrayMatrix",
        typia.application<[ArrayMatrix], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                type: "array",
                items: {
                    type: "array",
                    items: {
                        type: "number",
                        nullable: false
                    },
                    nullable: false
                },
                nullable: false
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