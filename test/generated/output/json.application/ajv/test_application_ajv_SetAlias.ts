import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { SetAlias } from "../../../../structures/SetAlias";

export const test_json_application_ajv_SetAlias = _test_json_application("ajv")(
    "SetAlias",
)(typia.json.application<[SetAlias], "ajv">());
