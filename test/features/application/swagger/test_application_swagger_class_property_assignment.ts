import TSON from "../../../../src";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_class_property_assignment =
    _test_application_swagger(
        "property assigned class",
        TSON.application<[ClassPropertyAssignment], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ClassPropertyAssignment",
                },
            ],
            components: {
                schemas: {
                    ClassPropertyAssignment: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            name: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                            note: {
                                type: "string",
                                enum: ["assignment"],
                                nullable: false,
                                "x-tson-required": true,
                            },
                            editable: {
                                type: "boolean",
                                enum: [false],
                                nullable: false,
                                "x-tson-required": true,
                            },
                            incremental: {
                                type: "boolean",
                                nullable: false,
                                "x-tson-required": true,
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
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
