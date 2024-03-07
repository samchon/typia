import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectJsonTag = _test_assert(CustomGuardError)(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.assert<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
);
