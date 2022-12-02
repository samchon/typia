import TSON from "../../../../src";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicUnion = _test_application(
    "swagger",
)("DynamicUnion", TSON.application<[DynamicUnion], "swagger">(), {
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
                            "x-tson-required": true,
                        },
                        {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
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
});
