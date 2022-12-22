import typia from "../../../../src";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ToJsonDouble = 
    _test_application("ajv")(
        "ToJsonDouble",
        typia.application<[ToJsonDouble], "ajv">(),
    );