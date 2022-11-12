import TSON from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_generic_alias =
    _test_application_swagger(
        "generic aliased object",
        TSON.application<[ObjectGenericAlias], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ObjectGenericAlias.Alias",
                },
            ],
            components: {
                schemas: {
                    "ObjectGenericAlias.Alias": {
                        type: "object",
                        properties: {
                            value: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
