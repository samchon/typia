import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertGuard_ObjectUnionComposite = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createAssertGuard<ObjectUnionComposite>(),
  );
