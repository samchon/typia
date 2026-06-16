import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_validateClone } from "../internal/_test_plain_validateClone";

export const test_plain_validateClone_ObjectSimple = (): void =>
  _test_plain_validateClone("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.plain.validateClone<ObjectSimple>(input),
  );
