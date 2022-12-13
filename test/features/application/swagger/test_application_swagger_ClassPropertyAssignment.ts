import TSON from "../../../../src";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassPropertyAssignment = 
    _test_application("swagger")(
        "ClassPropertyAssignment",
        TSON.application<[ClassPropertyAssignment], "swagger">(),{schemas: [
        {
            $ref: "#/components/schemas/ClassPropertyAssignment"
        }
    ],
    components: {
        schemas: {
            ClassPropertyAssignment: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    note: {
                        type: "string",
                        "enum": [
                            "assignment"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    editable: {
                        type: "boolean",
                        "enum": [
                            false
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    incremental: {
                        type: "boolean",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "note",
                    "editable",
                    "incremental"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);