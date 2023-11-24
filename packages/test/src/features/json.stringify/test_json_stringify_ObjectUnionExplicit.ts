import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_stringify_ObjectUnionExplicit = _test_json_stringify(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.json.stringify<ObjectUnionExplicit>(input),
);
