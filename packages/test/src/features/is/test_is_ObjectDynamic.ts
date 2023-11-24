import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_is_ObjectDynamic = _test_is("ObjectDynamic")<ObjectDynamic>(
  ObjectDynamic,
)((input) => typia.is<ObjectDynamic>(input));
