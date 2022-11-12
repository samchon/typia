import TSON from "../../../../src";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_optional = _test_application_ajv(
    "optional object",
    TSON.application<[ObjectOptional], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectOptional",
            },
        ],
        components: {
            schemas: {
                ObjectOptional: {
                    $id: "components#/schemas/ObjectOptional",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        email: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": false,
                        },
                        sequence: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": false,
                        },
                    },
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
