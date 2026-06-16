import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_isPrune } from "../internal/_test_plain_isPrune";

export const test_plain_isPrune_ObjectSimple = (): void =>
  _test_plain_isPrune("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.plain.isPrune<ObjectSimple>(input),
  );
