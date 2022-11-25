import TSON from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_application_ajv } from "./_test_application_ajv";

export const test_application_ajv_set_union = _test_application_ajv(
    "union set",
    TSON.application<[SetUnion], "ajv">(),
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/Set",
                },
                nullable: false,
            },
        ],
        components: {
            schemas: {
                Set: {
                    type: "object",
                    $id: "components#/schemas/Set",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
