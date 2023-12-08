import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_isStringify_ObjectUnionDouble = _test_json_isStringify(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  typia.json.isStringify<ObjectUnionDouble>(input),
);
