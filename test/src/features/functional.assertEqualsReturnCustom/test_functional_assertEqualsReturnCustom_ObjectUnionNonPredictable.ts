import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_functional_assertEqualsReturnCustom_ObjectUnionNonPredictable =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)(
      "ObjectUnionNonPredictable",
    )(ObjectUnionNonPredictable)(
      (p: (input: ObjectUnionNonPredictable) => ObjectUnionNonPredictable) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
