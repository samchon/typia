import TSON from "../../../../src";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_object_closure = _test_application_ajv(
    "closured object",
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
