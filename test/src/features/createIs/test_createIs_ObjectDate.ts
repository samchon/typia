import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_createIs_ObjectDate = _test_is("ObjectDate")<ObjectDate>(
  ObjectDate,
)(typia.createIs<ObjectDate>());
