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
                            },
                            professor: {
                                oneOf: [
                                    {
                                        type: "string",
                                        nullable: false,
                                    },
                                    {
                                        type: "number",
                                        nullable: false,
                                    },
                                ],
                            },
                            classroom: {
                                $ref: "#/components/schemas/ObjectUndefined.IClassroom",
                            },
                            grade: {
                                type: "number",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: ["name"],
                        "x-tson_jsDocTags": [],
                    },
                    "ObjectUndefined.IClassroom": {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
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
