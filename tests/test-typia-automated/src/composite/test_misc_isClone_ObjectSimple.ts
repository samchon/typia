import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_misc_isClone } from "../internal/_test_misc_isClone";

export const test_misc_isClone_ObjectSimple = (): void =>
  _test_misc_isClone("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.misc.isClone<ObjectSimple>(input),
  );
