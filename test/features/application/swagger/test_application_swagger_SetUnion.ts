import TSON from "../../../../src";
import { SetUnion } from "../../../structures/SetUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_SetUnion = 
    _test_application("swagger")(
        "SetUnion",
        TSON.application<[SetUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/Set"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            Set: {
                type: "object",
                properties: {},
                nullable: false
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);