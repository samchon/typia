import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertCloneCustom_ObjectUnionDouble = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.misc.assertClone<ObjectUnionDouble>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
