import TSON from "../../../../src";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectClosure = _test_application("ajv")(
    "ObjectClosure",
    TSON.application<[ObjectClosure], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectClosure.IRecord",
            },
        ],
        components: {
            schemas: {
                "ObjectClosure.IRecord": {
                    $id: "components#/schemas/ObjectClosure.IRecord",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    },
                    nullable: false,
                    required: ["id"],
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
