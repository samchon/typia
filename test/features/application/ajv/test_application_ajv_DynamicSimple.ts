import TSON from "../../../../src";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicSimple = _test_application("ajv")(
    "DynamicSimple",
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
