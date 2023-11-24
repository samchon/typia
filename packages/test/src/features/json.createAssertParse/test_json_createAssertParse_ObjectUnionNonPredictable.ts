import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createAssertParse_ObjectUnionNonPredictable =
  _test_json_assertParse(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.json.createAssertParse<ObjectUnionNonPredictable>(),
  );
