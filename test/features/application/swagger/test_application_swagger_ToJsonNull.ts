import TSON from "../../../../src";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ToJsonNull = _test_application("swagger")(
    "ToJsonNull",
    TSON.application<[ToJsonNull], "swagger">(),
    {
        schemas: [
            {
                type: "null",
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
