import TSON from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_generic_alias = _test_application_ajv(
    "generic aliased object",
    TSON.application<[ObjectGenericAlias], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectGenericAlias.Alias_lt_string_gt_",
            },
        ],
        components: {
            schemas: {
                "ObjectGenericAlias.Alias_lt_string_gt_": {
                    $id: "components#/schemas/ObjectGenericAlias.Alias_lt_string_gt_",
                    type: "object",
                    properties: {
                        value: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
