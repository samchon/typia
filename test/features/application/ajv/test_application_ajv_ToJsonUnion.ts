import typia from "typia"
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_application } from "../../../internal/_test_application";

export const test_application_ajv_ToJsonUnion = 
    _test_application("ajv")(
        "ToJsonUnion",
        typia.application<[ToJsonUnion], "ajv">(),
    );