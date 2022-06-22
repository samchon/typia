import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_application } from "./_test_application";

export const test_application_object_undefined = _test_application(
    "undefined object",
    TSON.application<[ObjectUndefied]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "reference",
                $ref: "#/components/schemas/ObjectUndefied.ILecture"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectUndefied.ILecture": {
                $id: "ObjectUndefied.ILecture",
                $type: "object",
                type: "object",
                properties: {
                    name: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    professor: {
                        $type: "oneOf",
                        oneOf: [
                            {
                                $type: "string",
                                type: "string",
                                nullable: false
                            },
                            {
                                $type: "number",
                                type: "number",
                                nullable: false
                            }
                        ]
                    },
                    classroom: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectUndefied.IClassroom"
                    },
                    grade: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    nothing: {
                        $type: "unknown"
                    }
                },
                nullable: false,
                required: [
                    "name"
                ]
            },
            "ObjectUndefied.IClassroom": {
                $id: "ObjectUndefied.IClassroom",
                $type: "object",
                type: "object",
                properties: {
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    name: {
                        $type: "string",
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