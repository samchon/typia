import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TagType } from "../../../structures/TagType";

export const test_json_application_swagger_TagType = _test_json_application(
    "swagger",
)("TagType", typia.json.application<[TagType], "swagger">());
