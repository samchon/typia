import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_json_createAssertParse_ObjectUnionNonPredictable = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.json.createAssertParse<ObjectUnionNonPredictable>(),
  );
