import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ObjectUnionNonPredictable =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.json.createAssertStringify<ObjectUnionNonPredictable>(),
  );
