import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_json_validateParse } from "../internal/_test_json_validateParse";

export const test_json_validateParse_ObjectSimple = (): void =>
  _test_json_validateParse("ObjectSimple")<ObjectSimple>(ObjectSimple)(
    (input) => typia.json.validateParse<ObjectSimple>(input),
  );
