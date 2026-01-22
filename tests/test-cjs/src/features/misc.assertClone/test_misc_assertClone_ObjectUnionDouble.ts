import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertClone_ObjectUnionDouble = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "ObjectUnionDouble",
  )<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
    typia.misc.assertClone<ObjectUnionDouble>(input),
  );
