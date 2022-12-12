import typia from "../../../../src";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectUndefined = _test_application(
    "swagger",
)("ObjectUndefined", typia.application<[ObjectUndefined], "swagger">(), {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectUndefined.ILecture",
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ObjectUndefined.ILecture": {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    professor: {
                        oneOf: [
                            {
                                type: "string",
                                nullable: false,
                                "x-typia-required": false,
                            },
                            {
                                type: "number",
                                nullable: false,
                                "x-typia-required": false,
                            },
                        ],
                        "x-typia-required": false,
                    },
                    classroom: {
                        $ref: "#/components/schemas/ObjectUndefined.IClassroom",
                        "x-typia-required": false,
                    },
                    grade: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false,
                    },
                    unknown: {},
                },
                nullable: false,
                required: ["name", "unknown"],
                "x-typia_jsDocTags": [],
            },
            "ObjectUndefined.IClassroom": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["id", "name"],
                "x-typia_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
