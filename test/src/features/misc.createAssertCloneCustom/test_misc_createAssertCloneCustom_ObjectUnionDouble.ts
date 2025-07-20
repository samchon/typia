import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createAssertCloneCustom_ObjectUnionDouble = (): void =>
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)(
    typia.misc.createAssertClone<ObjectUnionDouble>(
      (p) => new CustomGuardError(p),
    ),
  );
