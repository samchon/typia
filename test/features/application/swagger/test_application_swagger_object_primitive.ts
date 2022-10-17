import TSON from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_primitive =
    _test_application_swagger(
        "primitive object",
        TSON.application<[ObjectPrimitive], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/__type",
                },
            ],
            components: {
                schemas: {
                    __type: {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                            },
                            extension: {
                                type: "string",
                                enum: ["txt", "md", "html"],
                                nullable: false,
                            },
                            title: {
                                type: "string",
                                nullable: false,
                            },
                            body: {
                                type: "string",
                                nullable: false,
                            },
                            files: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/__type.o1",
                                },
                                nullable: false,
                            },
                            secret: {
                                type: "boolean",
                                nullable: false,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "extension",
                            "title",
                            "body",
                            "files",
                            "secret",
                            "created_at",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                    "__type.o1": {
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
                            extension: {
                                type: "string",
                                nullable: false,
                            },
                            url: {
                                type: "string",
                                nullable: false,
                            },
                            created_at: {
                                type: "string",
                                nullable: false,
                            },
                        },
                        nullable: false,
                        required: [
                            "id",
                            "name",
                            "extension",
                            "url",
                            "created_at",
                        ],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
