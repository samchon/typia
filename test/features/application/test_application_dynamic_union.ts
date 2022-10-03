import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_application } from "./_test_application";

export const test_application_dynamic_union = _test_application(
    "dynamic union",
    TSON.application<[DynamicUnion]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicUnion",
            },
        ],
        components: {
            schemas: {
                DynamicUnion: {
                    type: "object",
                    properties: {},
                    patternProperties: {
                        "-?\\d+\\.?\\d*": {
                            type: "string",
                            nullable: false,
                        },
                        "(prefix_(.*))": {
                            type: "string",
                            nullable: false,
                        },
                        "((.*)_postfix)": {
                            type: "string",
                            nullable: false,
                        },
                        "(value_between_-?\\d+\\.?\\d*_and_-?\\d+\\.?\\d*)": {
                            type: "number",
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
