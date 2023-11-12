import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonNull } from "../../../../structures/ToJsonNull";

export const test_json_application_swagger_ToJsonNull = _test_json_application(
    "swagger",
)("ToJsonNull")({
    schemas: [
        {
            type: "null",
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "swagger",
});
