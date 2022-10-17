import TSON from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_class_getter = _test_application_swagger(
    "class getter",
    TSON.application<[ClassGetter], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ClassGetter.Person",
            },
        ],
        components: {
            schemas: {
                "ClassGetter.Person": {
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
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
