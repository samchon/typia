import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_createAssertCloneCustom_ObjectDynamic = (): void =>
  _test_misc_assertClone(CustomGuardError)("ObjectDynamic")<ObjectDynamic>(
    ObjectDynamic,
  )(
    typia.misc.createAssertClone<ObjectDynamic>((p) => new CustomGuardError(p)),
  );
