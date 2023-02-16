import typia from "typia"
import { SetUnion } from "../../../structures/SetUnion";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_SetUnion = 
    _test_application("ajv")(
        "SetUnion",
        typia.application<[SetUnion], "ajv">(),
    );