import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_createIsParse_ObjectGenericAlias = _test_json_isParse(
  "ObjectGenericAlias",
)<ObjectGenericAlias>(ObjectGenericAlias)(
  typia.json.createIsParse<ObjectGenericAlias>(),
);
