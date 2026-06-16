import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_isClone } from "../internal/_test_plain_isClone";

export const test_plain_isClone_ObjectSimple = (): void =>
  _test_plain_isClone("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.plain.isClone<ObjectSimple>(input),
  );
