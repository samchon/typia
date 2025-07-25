import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertEquals_ObjectUnionComposite = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectUnionComposite",
  )<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createAssertEquals<ObjectUnionComposite>(),
  );
