import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUndefined } from "../../../../structures/ObjectUndefined";

export const test_json_application_swagger_ObjectUndefined =
    _test_json_application("swagger")("ObjectUndefined")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectUndefined",
            },
        ],
        components: {
            schemas: {
                ObjectUndefined: {
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectUndefined.ILecture",
                    },
                },
                "ObjectUndefined.ILecture": {
                    type: "object",
                    properties: {
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        professor: {
                            oneOf: [
                                {
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                    type: "string",
                                },
                                {
                                    "x-typia-required": false,
                                    "x-typia-optional": true,
                                    type: "number",
                                },
                            ],
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                        classroom: {
                            $ref: "#/components/schemas/ObjectUndefined.IClassroom",
                        },
                        grade: {
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        unknown: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    nullable: false,
                    required: ["name", "unknown"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectUndefined.IClassroom": {
                    type: "object",
                    properties: {
                        id: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
