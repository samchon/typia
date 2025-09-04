import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_is_ClassMethod = (): void =>
  _test_is("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
    typia.is<ClassMethod>(input),
  );
