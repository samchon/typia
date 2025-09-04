import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_isClone_ObjectNullable = (): void =>
  _test_misc_isClone("ObjectNullable")<ObjectNullable>(ObjectNullable)(
    (input) => typia.misc.isClone<ObjectNullable>(input),
  );
