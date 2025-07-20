import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createAssertCloneCustom_ObjectOptional = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )(
    typia.misc.createAssertClone<ObjectOptional>(
      (p) => new CustomGuardError(p),
    ),
  );
