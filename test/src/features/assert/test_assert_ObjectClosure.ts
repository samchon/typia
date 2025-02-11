import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assert_ObjectClosure = _test_assert(TypeGuardError)(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) => typia.assert<ObjectClosure>(input));
