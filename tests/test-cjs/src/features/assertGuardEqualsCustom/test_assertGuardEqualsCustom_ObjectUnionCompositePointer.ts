import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_assertGuardEqualsCustom_ObjectUnionCompositePointer =
  (): void =>
    _test_assertGuardEquals(CustomGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
      typia.assertGuardEquals<ObjectUnionCompositePointer>(
        input,
        (p) => new CustomGuardError(p),
      ),
    );
