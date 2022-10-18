import TSON from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_class_closure = _test_application_ajv(
    "class closure",
    TSON.application<[ClassGetter], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ClassGetter.Person",
            },
        ],
        components: {
            schemas: {
                "ClassGetter.Person": {
                    $id: "components#/schemas/ClassGetter.Person",
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
                        dead: {
                            type: "boolean",
                            nullable: true,
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "dead"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
