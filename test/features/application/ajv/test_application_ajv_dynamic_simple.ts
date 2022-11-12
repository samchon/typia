import TSON from "../../../../src";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_dynamic_simple = _test_application_ajv(
    "dynamic simple",
    TSON.application<[DynamicSimple], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicSimple",
            },
        ],
        components: {
            schemas: {
                DynamicSimple: {
                    $id: "components#/schemas/DynamicSimple",
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
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
