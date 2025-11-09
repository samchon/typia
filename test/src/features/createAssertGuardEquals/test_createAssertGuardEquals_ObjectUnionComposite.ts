import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertGuardEquals_ObjectUnionComposite = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createAssertGuardEquals<ObjectUnionComposite>(),
  );
