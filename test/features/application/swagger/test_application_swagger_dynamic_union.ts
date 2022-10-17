import TSON from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_dynamic_union = _test_application_swagger(
    "dynamic union",
    TSON.application<[DynamicUnion], "swagger">(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicUnion",
            },
        ],
        components: {
            schemas: {
                DynamicUnion: {
                    type: "object",
                    properties: {},
                    additionalProperties: {
                        oneOf: [
                            {
                                type: "string",
                                nullable: false,
                            },
                            {
                                type: "string",
                                nullable: false,
                            },
                            {
                                type: "string",
                                nullable: false,
                            },
                            {
                                type: "number",
                                nullable: false,
                            },
                        ],
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
