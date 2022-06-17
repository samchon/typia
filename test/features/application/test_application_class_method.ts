import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_application } from "./_test_application";

export const test_application_class_method = _test_application(
    "class method",
    TSON.application<[ClassMethod]>(),
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
                        },
                        age: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["name", "age"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
