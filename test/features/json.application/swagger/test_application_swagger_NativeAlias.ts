import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_json_application_swagger_NativeAlias = _test_json_application(
    "swagger",
)("NativeAlias")(typia.json.application<[NativeAlias], "swagger">());
