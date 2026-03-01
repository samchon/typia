import { ObjectSimple } from "@typia/template";
import typia, { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../internal/_test_json_assertStringify";

export const test_json_assertStringify_ObjectSimple = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) => typia.json.assertStringify<ObjectSimple>(input));
