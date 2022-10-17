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
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
