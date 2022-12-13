import typia from "../../../../src";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicUndefined = _test_application(
    "swagger",
)("DynamicUndefined", typia.application<[DynamicUndefined], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicUndefined",
        },
    ],
    components: {
        schemas: {
            DynamicUndefined: {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
