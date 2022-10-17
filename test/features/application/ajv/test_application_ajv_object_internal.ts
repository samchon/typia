import TSON from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_internal = _test_application_ajv(
    "internal object",
    TSON.application<[ObjectInternal], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectInternal",
            },
        ],
        components: {
            schemas: {
                ObjectInternal: {
                    $id: "components#/schemas/ObjectInternal",
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
