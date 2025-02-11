import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assertGuardEquals_ObjectHttpUndefindable =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.assertGuardEquals<ObjectHttpUndefindable>(input),
  );
