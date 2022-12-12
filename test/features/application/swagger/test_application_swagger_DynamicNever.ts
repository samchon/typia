import TSON from "../../../../src";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicNever = 
    _test_application("swagger")(
        "DynamicNever",
        TSON.application<[DynamicNever], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/DynamicNever"
        }
    ],
    components: {
        schemas: {
            DynamicNever: {
                type: "object",
                properties: {},
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);