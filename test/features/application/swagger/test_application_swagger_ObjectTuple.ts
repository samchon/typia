import TSON from "../../../../src";
import { ObjectTuple } from "../../../structures/ObjectTuple";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectTuple = _test_application(
    "swagger",
)("ObjectTuple", TSON.application<[ObjectTuple], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectTuple.ISection",
                    },
                    {
                        $ref: "#/components/schemas/ObjectTuple.ICitizen",
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ObjectTuple.ISection": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    code: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "code", "name"],
                "x-tson_jsDocTags": [],
            },
            "ObjectTuple.ICitizen": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    mobile: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "mobile", "name"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
