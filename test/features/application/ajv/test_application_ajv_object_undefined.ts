import TSON from "../../../../src";
import { ObjectUndefied } from "../../../structures/ObjectUndefied";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_undefined = _test_application_ajv(
    "undefined object",
    TSON.application<[ObjectUndefied], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "components#/schemas/ObjectUndefied.ILecture",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                "ObjectUndefied.ILecture": {
                    $id: "components#/schemas/ObjectUndefied.ILecture",
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
                            $ref: "components#/schemas/ObjectUndefied.IClassroom",
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
                    $id: "components#/schemas/ObjectUndefied.IClassroom",
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
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
