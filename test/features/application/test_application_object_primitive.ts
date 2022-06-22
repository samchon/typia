import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_application } from "./_test_application";

export const test_application_object_primitive = _test_application(
    "primitive object",
    TSON.application<[ObjectPrimitive]>(),
{schemas: [
        {
            $type: "reference",
            $ref: "#/components/schemas/__type"
        }
    ],
    components: {
        schemas: {
            __type: {
                $id: "__type",
                $type: "object",
                type: "object",
                properties: {
                    id: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    extension: {
                        $type: "enum",
                        "enum": [
                            "txt",
                            "md",
                            "html"
                        ],
                        nullable: false
                    },
                    title: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    body: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    files: {
                        type: "array",
                        $type: "array",
                        items: {
                            $type: "reference",
                            $ref: "#/components/schemas/__type.o1"
                        },
                        nullable: false
                    },
                    secret: {
                        $type: "enum",
                        "enum": [
                            false,
                            true
                        ],
                        nullable: false
                    },
                    created_at: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "extension",
                    "title",
                    "body",
                    "files",
                    "secret",
                    "created_at"
                ]
            },
            "__type.o1": {
                $id: "__type.o1",
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
                    },
                    extension: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    url: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    },
                    created_at: {
                        $type: "string",
                        type: "string",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "extension",
                    "url",
                    "created_at"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);