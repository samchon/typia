import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assert_ObjectHttpUndefindable = (): void =>
  _test_assert(TypeGuardError)(
    "ObjectHttpUndefindable",
  )<ObjectHttpUndefindable>(ObjectHttpUndefindable)((input) =>
    typia.assert<ObjectHttpUndefindable>(input),
  );
