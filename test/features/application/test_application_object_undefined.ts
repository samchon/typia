import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_application } from "./_test_application";

export const test_application_object_undefined = _test_application(
    "undefined object",
    TSON.application<[ObjectUndefied]>(),
{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectUndefied.ILecture"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectUndefied.ILecture": {
                $id: "ObjectUndefied.ILecture",
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false
                    },
                    professor: {
                        oneOf: [
                            {
                                type: "string",
                                nullable: false
                            },
                            {
                                type: "number",
                                nullable: false
                            }
                        ]
                    },
                    classroom: {
                        $ref: "#/components/schemas/ObjectUndefied.IClassroom"
                    },
                    grade: {
                        type: "number",
                        nullable: false
                    },
                    nothing: {}
                },
                nullable: false,
                required: [
                    "name"
                ]
            },
            "ObjectUndefied.IClassroom": {
                $id: "ObjectUndefied.IClassroom",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);