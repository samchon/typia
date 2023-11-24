import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssert_ObjectClosure = _test_assert(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.createAssert<ObjectClosure>());
