import TSON from "../../../../src";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonNull = _test_application("ajv")(
    "ToJsonNull",
    TSON.application<[ToJsonNull], "ajv">(),
    {
        schemas: [
            {
                type: "null",
            },
        ],
        components: {
            schemas: {},
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
