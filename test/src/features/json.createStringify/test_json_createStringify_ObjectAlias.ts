import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_createStringify_ObjectAlias = _test_json_stringify(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)(typia.json.createStringify<ObjectAlias>());
