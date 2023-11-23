import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_isStringify_ObjectGeneric = _test_json_isStringify(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.json.isStringify<ObjectGeneric>(input),
);
