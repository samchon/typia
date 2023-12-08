import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_isParse_ObjectUnionExplicit = _test_json_isParse(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.json.isParse<ObjectUnionExplicit>(input),
);
