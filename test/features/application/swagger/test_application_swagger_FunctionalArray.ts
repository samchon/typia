import TSON from "../../../../src";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_FunctionalArray = 
    _test_application("swagger")(
        "FunctionalArray",
        TSON.application<[FunctionalArray], "swagger">(),{schemas: [
        {
            type: "array",
            items: {},
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