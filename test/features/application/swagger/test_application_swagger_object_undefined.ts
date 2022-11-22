import TSON from "../../../../src";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_undefined =
    _test_application_swagger(
        "undefined object",
        TSON.application<[ObjectUndefined], "swagger">(),
        {
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
                                "x-tson-required": true,
                            },
                            professor: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: false,
                                        "x-tson-required": false,
                                    },
                                    {
                                        type: "number",
                                        nullable: false,
                                        "x-tson-required": false,
                                    },
                                ],
                                "x-tson-required": false,
                            },
                            classroom: {
                                $ref: "#/components/schemas/ObjectUndefined.IClassroom",
                                "x-tson-required": false,
                            },
                            grade: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": false,
                            },
                            unknown: {},
                        },
                        nullable: false,
                        required: ["name", "unknown"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUndefined.IClassroom": {
                        type: "object",
                        properties: {
                            id: {
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
                        required: ["id", "name"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
