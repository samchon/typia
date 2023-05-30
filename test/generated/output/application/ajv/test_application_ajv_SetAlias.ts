import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { SetAlias } from "../../../../structures/SetAlias";
export const test_application_ajv_SetAlias = _test_application("ajv")("SetAlias", typia.application<[
    SetAlias
], "ajv">());
