import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_validatePrune } from "../internal/_test_plain_validatePrune";

export const test_plain_validatePrune_ObjectSimple = (): void =>
  _test_plain_validatePrune("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.plain.validatePrune<ObjectSimple>(input),
  );
