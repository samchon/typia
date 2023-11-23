import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_assertParse_ObjectUnionExplicit = _test_json_assertParse(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.json.assertParse<ObjectUnionExplicit>(input),
);
