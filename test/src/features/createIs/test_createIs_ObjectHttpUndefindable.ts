import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createIs_ObjectHttpUndefindable = (): void =>
  _test_is("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.createIs<ObjectHttpUndefindable>());
