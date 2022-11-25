import TSON from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectDynamic = _test_application("ajv")(
    "ObjectDynamic",
    TSON.application<[ObjectDynamic], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectDynamic",
            },
        ],
        components: {
            schemas: {
                ObjectDynamic: {
                    $id: "components#/schemas/ObjectDynamic",
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
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
