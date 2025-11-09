import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_assertEquals_ObjectUnionImplicit = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectUnionImplicit",
  )<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
    typia.assertEquals<ObjectUnionImplicit>(input),
  );
