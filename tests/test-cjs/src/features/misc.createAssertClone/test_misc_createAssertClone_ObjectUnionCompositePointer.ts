import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_createAssertClone_ObjectUnionCompositePointer =
  (): void =>
    _test_misc_assertClone(TypeGuardError)(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.misc.createAssertClone<ObjectUnionCompositePointer>(),
    );
