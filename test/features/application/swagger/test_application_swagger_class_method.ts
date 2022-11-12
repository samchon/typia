import TSON from "../../../../src";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_class_method = _test_application_swagger(
    "class method",
    TSON.application<[ClassMethod], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ClassMethod.Animal",
            },
        ],
        components: {
            schemas: {
                "ClassMethod.Animal": {
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
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
