import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_application } from "./_test_application";

export const test_application_class_non_public = _test_application(
    "non-public class member",
    TSON.application<[ClassNonPublic]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ClassNonPublic.Accessor",
            },
        ],
        components: {
            schemas: {
                "ClassNonPublic.Accessor": {
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
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
