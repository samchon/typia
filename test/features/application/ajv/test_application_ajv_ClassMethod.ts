import TSON from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassMethod = 
    _test_application("ajv")(
        "ClassMethod",
        TSON.application<[ClassMethod], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/ClassMethod.Animal"
        }
    ],
    components: {
        schemas: {
            "ClassMethod.Animal": {
                $id: "components#/schemas/ClassMethod.Animal",
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    age: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "age"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);