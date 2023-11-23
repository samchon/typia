import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_isParse_ObjectGeneric = _test_json_isParse(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.json.isParse<ObjectGeneric>(input),
);
