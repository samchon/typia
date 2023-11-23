import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_is_ObjectJsonTag = _test_is("ObjectJsonTag")<ObjectJsonTag>(
  ObjectJsonTag,
)((input) => typia.is<ObjectJsonTag>(input));
