import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createAssertEquals_ObjectClosure = _test_assertEquals(
  "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(typia.createAssertEquals<ObjectClosure>());
