import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_createAssertCloneCustom_ObjectUnionComposite =
  (): void =>
    _test_misc_assertClone(CustomGuardError)(
      "ObjectUnionComposite",
    )<ObjectUnionComposite>(ObjectUnionComposite)(
      typia.misc.createAssertClone<ObjectUnionComposite>(
        (p) => new CustomGuardError(p),
      ),
    );
