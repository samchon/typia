import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagFormat } from "../../../structures/TagFormat";

export const test_json_application_swagger_TagFormat = _test_json_application(
    "swagger",
)("TagFormat")(typia.json.application<[TagFormat], "swagger">());
