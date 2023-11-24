import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertGuard_ObjectClosure = _test_assertGuard(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.createAssertGuard<ObjectClosure>());
