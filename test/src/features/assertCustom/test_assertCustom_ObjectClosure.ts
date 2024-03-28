import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assertCustom_ObjectClosure = _test_assert(CustomGuardError)(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
  typia.assert<ObjectClosure>(input, (p) => new CustomGuardError(p)),
);
