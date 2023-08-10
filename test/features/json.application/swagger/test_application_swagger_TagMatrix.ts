import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagMatrix } from "../../../structures/TagMatrix";

export const test_json_application_swagger_TagMatrix = _test_json_application(
    "swagger",
)("TagMatrix")(typia.json.application<[TagMatrix], "swagger">());
