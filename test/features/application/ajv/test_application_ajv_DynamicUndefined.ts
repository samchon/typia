import TSON from "../../../../src";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_DynamicUndefined = 
    _test_application("ajv")(
        "DynamicUndefined",
        TSON.application<[DynamicUndefined], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/DynamicUndefined"
        }
    ],
    components: {
        schemas: {
            DynamicUndefined: {
                $id: "components#/schemas/DynamicUndefined",
                type: "object",
                properties: {},
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);