import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_misc_isPrune } from "../internal/_test_misc_isPrune";

export const test_misc_isPrune_ObjectSimple = (): void =>
  _test_misc_isPrune("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.misc.isPrune<ObjectSimple>(input),
  );
