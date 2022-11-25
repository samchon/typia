import TSON from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_SetUnion = _test_application("ajv")(
    "SetUnion",
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
