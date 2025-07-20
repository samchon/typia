import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assertCustom_ObjectJsonTag = (): void =>
  _test_assert(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)(
    (input) =>
      typia.assert<ObjectJsonTag>(input, (p) => new CustomGuardError(p)),
  );
