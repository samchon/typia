import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../internal/_test_json_assertParse";

export const test_json_assertParse_ObjectSimple = (): void =>
  _test_json_assertParse(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.json.assertParse<ObjectSimple>(input));
