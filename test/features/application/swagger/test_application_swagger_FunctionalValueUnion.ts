import TSON from "../../../../src";
import { FunctionalValueUnion } from "../../../structures/FunctionalValueUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalValueUnion = 
    _test_application("swagger")(
        "FunctionalValueUnion",
        TSON.application<[FunctionalValueUnion], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        type: "string",
                        nullable: true
                    },
                    {
                        type: "number",
                        nullable: true
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {}
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);