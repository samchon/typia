import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_plain_assertPrune } from "../internal/_test_plain_assertPrune";

export const test_plain_assertPrune_ObjectSimple = (): void =>
  _test_plain_assertPrune(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.plain.assertPrune<ObjectSimple>(input));
