import TSON from "../../../../src";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicArray = 
    _test_application("swagger")(
        "DynamicArray",
        TSON.application<[DynamicArray], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/DynamicArray"
        }
    ],
    components: {
        schemas: {
            DynamicArray: {
                type: "object",
                properties: {},
                additionalProperties: {
                    type: "array",
                    items: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    nullable: false,
                    "x-typia-required": true
                },
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);