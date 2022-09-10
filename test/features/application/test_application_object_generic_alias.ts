import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_application } from "./_test_application";

export const test_application_object_generic_alias = _test_application(
    "generic aliased object",
    TSON.application<[ObjectGenericAlias]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectGenericAlias.ISomething_lt_string_gt_",
            },
        ],
        components: {
            schemas: {
                "ObjectGenericAlias.ISomething_lt_string_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
