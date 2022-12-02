import TSON from "../../../../src";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectInternal = _test_application("ajv")(
    "ObjectInternal",
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
                            "x-tson-required": true,
                        },
                        name: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
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
