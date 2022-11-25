import TSON from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_DynamicComposite = _test_application(
    "swagger",
)("DynamicComposite", TSON.application<[DynamicComposite], "swagger">(), {
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
                        "x-tson-required": true,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                additionalProperties: {
                    oneOf: [
                        {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            oneOf: [
                                {
                                    type: "string",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                {
                                    type: "number",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                                {
                                    type: "boolean",
                                    nullable: false,
                                    "x-tson-required": true,
                                },
                            ],
                            "x-tson-required": true,
                        },
                        {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
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
});
