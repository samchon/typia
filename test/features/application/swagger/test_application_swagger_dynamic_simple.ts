import TSON from "../../../../src";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_dynamic_simple =
    _test_application_swagger(
        "dynamic simple",
        TSON.application<[DynamicSimple], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/DynamicSimple",
                },
            ],
            components: {
                schemas: {
                    DynamicSimple: {
                        type: "object",
                        properties: {},
                        additionalProperties: {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        nullable: false,
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
