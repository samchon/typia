import typia from "typia";

import { _test_misc_classTransform } from "../../internal/_test_misc_classTransform";
import { SimpleClass } from "../../structures/SimpleClass";

export const test_misc_assertClassTransform_SimpleClass = (): void =>
  _test_misc_classTransform("SimpleClass")<SimpleClass>(SimpleClass)(
    (input) => typia.misc.assertClassTransform<SimpleClass>(input),
  );