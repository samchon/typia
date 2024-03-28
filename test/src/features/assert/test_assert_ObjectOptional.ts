import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assert_ObjectOptional = _test_assert(TypeGuardError)(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  typia.assert<ObjectOptional>(input),
);
