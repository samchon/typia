import TSON from "../../../../src";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ConstantAtomicUnion = 
    _test_application("swagger")(
        "ConstantAtomicUnion",
        TSON.application<[ConstantAtomicUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "boolean",
                        "enum": [
                            false
                        ],
                        nullable: false
                    },
                    {
                        type: "number",
                        "enum": [
                            2,
                            1
                        ],
                        nullable: false
                    },
                    {
                        type: "string",
                        "enum": [
                            "three",
                            "four"
                        ],
                        nullable: false
                    },
                    {
                        $ref: "#/components/schemas/__type"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            __type: {
                type: "object",
                properties: {
                    key: {
                        type: "string",
                        "enum": [
                            "key"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "key"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);