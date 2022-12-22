import typia from "../../../../src";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonArray = _test_application("ajv")(
    "ToJsonArray",
    typia.application<[ToJsonArray], "ajv">(),
);
