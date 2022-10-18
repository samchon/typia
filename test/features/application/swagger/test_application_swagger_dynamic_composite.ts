import TSON from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_dynamic_composite =
    _test_application_swagger(
        "dynamic composite",
        TSON.application<[DynamicComposite], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/DynamicComposite",
                },
            ],
            components: {
                schemas: {
                    DynamicComposite: {
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
                        },
                        additionalProperties: {
                            oneOf: [
                                {
                                    type: "number",
                                    nullable: false,
                                },
                                {
                                    type: "string",
                                    nullable: false,
                                },
                                {
                                    type: "string",
                                    nullable: false,
                                },
                                {
                                    oneOf: [
                                        {
                                            type: "string",
                                            nullable: false,
                                        },
                                        {
                                            type: "number",
                                            nullable: false,
                                        },
                                        {
                                            type: "boolean",
                                            nullable: false,
                                        },
                                    ],
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                },
                            ],
                        },
                        nullable: false,
                        required: ["id", "name"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
