import TSON from "../../../../src";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_class_non_public =
    _test_application_swagger(
        "non-public class member",
        TSON.application<[ClassNonPublic], "swagger">(),
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
                                "x-tson-required": true,
                            },
                            shown: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["implicit", "shown"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
