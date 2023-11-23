import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_createAssertParse_ObjectAlias = _test_json_assertParse(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(typia.json.createAssertParse<ObjectAlias>());
