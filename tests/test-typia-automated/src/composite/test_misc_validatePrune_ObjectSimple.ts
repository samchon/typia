import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_misc_validatePrune } from "../internal/_test_misc_validatePrune";

export const test_misc_validatePrune_ObjectSimple = (): void =>
  _test_misc_validatePrune("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.misc.validatePrune<ObjectSimple>(input),
  );
