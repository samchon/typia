import typia from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectTuple = 
    _test_application("swagger")(
        "ObjectTuple",
        typia.application<[ObjectTuple], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectTuple.ISection"
                    },
                    {
                        $ref: "#/components/schemas/ObjectTuple.ICitizen"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectTuple.ISection": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
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
                    "id",
                    "code",
                    "name"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectTuple.ICitizen": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    mobile: {
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
                    "id",
                    "mobile",
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