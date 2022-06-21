import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_application } from "./_test_application";

export const test_application_object_primitive = _test_application(
    "primitive object",
    TSON.application<[ObjectPrimitive]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/__type",
            },
        ],
        components: {
            schemas: {
                __type: {
                    $id: "__type",
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
                            enum: [false, true],
                            nullable: false,
                        },
                        created_at: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: [
                        "__type",
                        "__type",
                        "__type",
                        "__type",
                        "__type",
                        "__type",
                        "__type",
                    ],
                },
                "__type.o1": {
                    $id: "__type.o1",
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
                        "__type.o1",
                        "__type.o1",
                        "__type.o1",
                        "__type.o1",
                        "__type.o1",
                    ],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
