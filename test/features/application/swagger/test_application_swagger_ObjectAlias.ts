import TSON from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectAlias = _test_application(
    "swagger",
)("ObjectAlias", TSON.application<[ObjectAlias], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectAlias.IMember",
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ObjectAlias.IMember": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: true,
                        "x-tson-required": true,
                    },
                    email: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    sex: {
                        oneOf: [
                            {
                                type: "number",
                                enum: [2, 1],
                                nullable: true,
                                "x-tson-required": true,
                            },
                            {
                                type: "string",
                                enum: ["male", "female"],
                                nullable: true,
                                "x-tson-required": true,
                            },
                        ],
                        "x-tson-required": true,
                    },
                    age: {
                        type: "number",
                        nullable: true,
                        "x-tson-required": true,
                    },
                    dead: {
                        type: "boolean",
                        nullable: true,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "email", "name", "sex", "age", "dead"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
