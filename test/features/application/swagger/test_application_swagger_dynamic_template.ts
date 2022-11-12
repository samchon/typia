import TSON from "../../../../src";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_dynamic_template =
    _test_application_swagger(
        "dynamic template",
        TSON.application<[DynamicTemplate], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/DynamicTemplate",
                },
            ],
            components: {
                schemas: {
                    DynamicTemplate: {
                        type: "object",
                        properties: {},
                        additionalProperties: {
                            oneOf: [
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
                        },
                        nullable: false,
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
