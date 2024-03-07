import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectUnionNonPredictable =
  _test_assertEquals(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.createAssertEquals<ObjectUnionNonPredictable>(),
  );
