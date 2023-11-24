import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_assertParse_ObjectNullable = _test_json_assertParse(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  typia.json.assertParse<ObjectNullable>(input),
);
