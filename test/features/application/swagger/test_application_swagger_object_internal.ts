import TSON from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_internal =
    _test_application_swagger(
        "internal object",
        TSON.application<[ObjectInternal], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ObjectInternal",
                },
            ],
            components: {
                schemas: {
                    ObjectInternal: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id", "name"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
