import TSON from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_class_method = _test_application_ajv(
    "class method",
    TSON.application<[ClassMethod], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ClassMethod.Animal",
            },
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
                            "x-tson-required": true,
                        },
                        age: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["name", "age"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
