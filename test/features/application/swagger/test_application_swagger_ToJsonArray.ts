import TSON from "../../../../src";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonArray = 
    _test_application("swagger")(
        "ToJsonArray",
        TSON.application<[ToJsonArray], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "array",
                        items: {
                            type: "boolean",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            type: "number",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            type: "string",
                            nullable: false
                        },
                        nullable: false
                    },
                    {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ToJsonArray.IObject"
                        },
                        nullable: false
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ToJsonArray.IObject": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);