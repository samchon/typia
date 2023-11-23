import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createAssertEquals_ObjectHttpUndefindable =
  _test_assertEquals("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.createAssertEquals<ObjectHttpUndefindable>());
