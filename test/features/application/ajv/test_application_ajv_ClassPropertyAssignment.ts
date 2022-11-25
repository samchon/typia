import TSON from "../../../../src";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassPropertyAssignment = _test_application(
    "ajv",
)(
    "ClassPropertyAssignment",
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
                    required: ["id", "name", "note", "editable", "incremental"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
