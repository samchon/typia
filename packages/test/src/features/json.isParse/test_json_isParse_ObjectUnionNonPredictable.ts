import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_isParse_ObjectUnionNonPredictable = _test_json_isParse(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
  typia.json.isParse<ObjectUnionNonPredictable>(input),
);
