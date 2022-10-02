import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_application } from "./_test_application";

export const test_application_dynamic_simple = _test_application(
    "dynamic simple",
    TSON.application<[DynamicSimple]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicSimple",
            },
        ],
        components: {
            schemas: {
                DynamicSimple: {
                    type: "object",
                    properties: {},
                    patternProperties: {
                        "(.*)": {
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
