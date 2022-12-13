import TSON from "../../../../src";
import { SetAlias } from "../../../structures/SetAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_SetAlias = 
    _test_application("swagger")(
        "SetAlias",
        TSON.application<[SetAlias], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/SetAlias"
        }
    ],
    components: {
        schemas: {
            SetAlias: {
                type: "object",
                properties: {
                    booleans: {
                        $ref: "#/components/schemas/Set",
                        "x-typia-required": true
                    },
                    numbers: {
                        $ref: "#/components/schemas/Set",
                        "x-typia-required": true
                    },
                    strings: {
                        $ref: "#/components/schemas/Set",
                        "x-typia-required": true
                    },
                    arrays: {
                        $ref: "#/components/schemas/Set",
                        "x-typia-required": true
                    },
                    objects: {
                        $ref: "#/components/schemas/Set",
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "booleans",
                    "numbers",
                    "strings",
                    "arrays",
                    "objects"
                ],
                "x-typia_jsDocTags": []
            },
            Set: {
                type: "object",
                properties: {},
                nullable: false
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);