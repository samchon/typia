import TSON from "../../../../src";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicSimple = _test_application(
    "swagger",
)("DynamicSimple", TSON.application<[DynamicSimple], "swagger">(), {
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
});
