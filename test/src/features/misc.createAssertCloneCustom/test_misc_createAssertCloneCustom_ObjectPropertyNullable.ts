import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createAssertCloneCustom_ObjectPropertyNullable =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)(
      typia.misc.createAssertClone<ObjectPropertyNullable>(
        (p) => new CustomGuardError(p),
      ),
    );
