import TSON from "../../../../src";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_dynamic_composite = _test_application_ajv(
    "dynamic composite",
    TSON.application<[DynamicComposite], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/DynamicComposite",
            },
        ],
        components: {
            schemas: {
                DynamicComposite: {
                    $id: "components#/schemas/DynamicComposite",
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
                    patternProperties: {
                        "^-?\\d+\\.?\\d*$": {
                            type: "number",
                            nullable: false,
                        },
                        "^(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                        },
                        "((.*)_postfix)$": {
                            type: "string",
                            nullable: false,
                        },
                        "^(value_-?\\d+\\.?\\d*)$": {
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
                        "^(between_(.*)_and_-?\\d+\\.?\\d*)$": {
                            type: "boolean",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["id", "name"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
