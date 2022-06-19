import TSON from "../../../src";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";
import { _test_application } from "./_test_application";

export const test_application_object_literal_type = _test_application(
    "literal propertized object",
    TSON.application<[typeof ObjectLiteralType]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/__object",
            },
        ],
        components: {
            schemas: {
                __object: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
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
                    required: ["id", "name", "age"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
