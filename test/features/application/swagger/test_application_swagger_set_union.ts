import TSON from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_set_union = _test_application_swagger(
    "union set",
    TSON.application<[SetUnion], "swagger">(),
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
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
