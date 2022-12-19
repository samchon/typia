import typia from "../../../../src";
import { ClassClosure } from "../../../structures/ClassClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassClosure = 
    _test_application("ajv")(
        "ClassClosure",
        typia.application<[ClassClosure], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/ClassClosure.Something"
        }
    ],
    components: {
        schemas: {
            "ClassClosure.Something": {
                $id: "components#/schemas/ClassClosure.Something",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    type: {
                        type: "string",
                        "enum": [
                            "something"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "type"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);