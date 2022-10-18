import TSON from "../../../../src";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_class_property_assignment =
    _test_application_ajv(
        "property assigned class",
        TSON.application<[ClassPropertyAssignment], "ajv">(),
        {
            schemas: [
                {
                    $ref: "components#/schemas/ClassPropertyAssignment",
                },
            ],
            components: {
                schemas: {
                    ClassPropertyAssignment: {
                        $id: "components#/schemas/ClassPropertyAssignment",
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                            },
                            note: {
                                type: "string",
                                enum: ["assignment"],
                                nullable: false,
                            },
                            editable: {
                                type: "boolean",
                                enum: [false],
                                nullable: false,
                            },
                            incremental: {
                                type: "boolean",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "name",
                            "note",
                            "editable",
                            "incremental",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "ajv",
            prefix: "components#/schemas",
        },
    );
