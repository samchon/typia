import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectAlias } from "../../../../structures/ObjectAlias";

export const test_json_application_swagger_ObjectAlias = _test_json_application(
    "swagger",
)("ObjectAlias", typia.json.application<[ObjectAlias], "swagger">());
