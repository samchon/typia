import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createIs_ObjectTuple = _test_is("ObjectTuple")<ObjectTuple>(
  ObjectTuple,
)(typia.createIs<ObjectTuple>());
