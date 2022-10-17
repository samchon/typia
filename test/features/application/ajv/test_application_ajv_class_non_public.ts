import TSON from "../../../../src";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_class_non_public = _test_application_ajv(
    "non-public class member",
    TSON.application<[ClassNonPublic], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ClassNonPublic.Accessor",
            },
        ],
        components: {
            schemas: {
                "ClassNonPublic.Accessor": {
                    $id: "components#/schemas/ClassNonPublic.Accessor",
                    type: "object",
                    properties: {
                        implicit: {
                            type: "string",
                            nullable: false,
                        },
                        shown: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["implicit", "shown"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
