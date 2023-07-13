import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { TagTuple } from "../../../../structures/TagTuple";

export const test_json_application_swagger_TagTuple = _test_json_application(
    "swagger",
)("TagTuple", typia.json.application<[TagTuple], "swagger">());
