import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_json_isStringify } from "../internal/_test_json_isStringify";

export const test_json_isStringify_ObjectSimple = (): void =>
  _test_json_isStringify("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.json.isStringify<ObjectSimple>(input),
  );
