import TSON from "../../../../src";
import { Namespace } from "../../../structures/Namespace";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_namespace = _test_application_ajv(
    "namespace",
    TSON.application<[typeof Namespace], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/Namespace",
            },
        ],
        components: {
            schemas: {
                Namespace: {
                    $id: "components#/schemas/Namespace",
                    type: "object",
                    properties: {},
                    nullable: false,
                    "x-tson_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
