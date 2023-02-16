import typia from "typia"
import { SetAlias } from "../../../structures/SetAlias";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_SetAlias = 
    _test_application("ajv")(
        "SetAlias",
        typia.application<[SetAlias], "ajv">(),
    );