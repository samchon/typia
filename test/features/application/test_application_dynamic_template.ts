import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_application } from "./_test_application";

export const test_application_dynamic_template = _test_application(
    "dynamic template",
    TSON.application<[DynamicTemplate]>(),
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
                    patternProperties: {
                        "(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                        },
                        "((.*)_postfix)": {
                            type: "string",
                            nullable: false,
                        },
                        "(value_\\d+(\\.\\d+)?)": {
                            type: "number",
                            nullable: false,
                        },
                        "(between_(.*)_and_\\d+(\\.\\d+)?)": {
                            type: "boolean",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
