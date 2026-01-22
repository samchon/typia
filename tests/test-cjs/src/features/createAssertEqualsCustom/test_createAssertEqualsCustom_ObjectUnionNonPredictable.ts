import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertEqualsCustom_ObjectUnionNonPredictable =
  (): void =>
    _test_assertEquals(CustomGuardError)(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
      typia.createAssertEquals<ObjectUnionNonPredictable>(
        (p) => new CustomGuardError(p),
      ),
    );
