import TSON from "../../../src";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";
import { _test_application } from "./_test_application";

export const test_application_class_property_assignment = _test_application(
    "property assigned class",
    TSON.application<[ClassPropertyAssignment]>(),
{schemas: [
        {
            $type: "reference",
            $ref: "#/components/schemas/ClassPropertyAssignment"
        }
    ],
    components: {
        schemas: {
            ClassPropertyAssignment: {
                $id: "ClassPropertyAssignment",
                $type: "object",
                type: "object",
                properties: {
                    id: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    note: {
                        $type: "enum",
                        "enum": [
                            "assignment"
                        ],
                        nullable: false
                    },
                    editable: {
                        $type: "enum",
                        "enum": [
                            false
                        ],
                        nullable: false
                    },
                    incremental: {
                        $type: "enum",
                        "enum": [
                            false,
                            true
                        ],
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "note",
                    "editable",
                    "incremental"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);