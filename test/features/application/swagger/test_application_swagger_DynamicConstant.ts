import TSON from "../../../../src";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicConstant = 
    _test_application("swagger")(
        "DynamicConstant",
        TSON.application<[DynamicConstant], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/DynamicConstant"
        }
    ],
    components: {
        schemas: {
            DynamicConstant: {
                type: "object",
                properties: {
                    a: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    b: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    c: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    d: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "a",
                    "b",
                    "c",
                    "d"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);