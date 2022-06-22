import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_application } from "./_test_application";

export const test_application_object_alias = _test_application(
    "aliased object",
    TSON.application<[ObjectAlias]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "reference",
                $ref: "#/components/schemas/ObjectAlias.IMember"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectAlias.IMember": {
                $id: "ObjectAlias.IMember",
                $type: "object",
                type: "object",
                properties: {
                    id: {
                        $type: "null",
                        type: "null"
                    },
                    email: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    sex: {
                        $type: "oneOf",
                        oneOf: [
                            {
                                $type: "enum",
                                "enum": [
                                    2,
                                    1
                                ],
                                nullable: true
                            },
                            {
                                $type: "enum",
                                "enum": [
                                    "male",
                                    "female"
                                ],
                                nullable: true
                            }
                        ]
                    },
                    age: {
                        $type: "null",
                        type: "null"
                    },
                    dead: {
                        $type: "enum",
                        "enum": [
                            false,
                            true
                        ],
                        nullable: true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "email",
                    "name",
                    "sex",
                    "age",
                    "dead"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);