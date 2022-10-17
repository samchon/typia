import TSON from "../../../../src";
import { ObjectUndefied } from "../../../structures/ObjectUndefied";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_undefined =
    _test_application_swagger(
        "undefined object",
        TSON.application<[ObjectUndefied], "swagger">(),
        {
            schemas: [
                {
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectUndefied.ILecture",
                    },
                    nullable: false,
                },
            ],
            components: {
                schemas: {
                    "ObjectUndefied.ILecture": {
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
                                $ref: "#/components/schemas/ObjectUndefied.IClassroom",
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
                    "ObjectUndefied.IClassroom": {
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
