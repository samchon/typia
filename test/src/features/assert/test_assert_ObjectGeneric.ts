import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assert_ObjectGeneric = (): void =>
  _test_assert(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    (input) => typia.assert<ObjectGeneric>(input),
  );
