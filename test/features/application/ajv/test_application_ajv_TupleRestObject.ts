import typia from "../../../../src";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TupleRestObject = 
    _test_application("ajv")(
        "TupleRestObject",
        typia.application<[TupleRestObject], "ajv">(),{schemas: [
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
                            $ref: "components#/schemas/TupleRestObject.IObject"
                        },
                        nullable: false
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "TupleRestObject.IObject": {
                $id: "components#/schemas/TupleRestObject.IObject",
                type: "object",
                properties: {
                    value: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "value"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);