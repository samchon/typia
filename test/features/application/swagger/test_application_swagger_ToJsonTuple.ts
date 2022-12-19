import typia from "../../../../src";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonTuple = 
    _test_application("swagger")(
        "ToJsonTuple",
        typia.application<[ToJsonTuple], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "string",
                        nullable: false
                    },
                    {
                        type: "number",
                        nullable: false
                    },
                    {
                        type: "boolean",
                        nullable: false
                    },
                    {
                        $ref: "#/components/schemas/ToJsonTuple.IHobby"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ToJsonTuple.IHobby": {
                type: "object",
                properties: {
                    code: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "code",
                    "name"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);