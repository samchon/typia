import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_isStringify_ArraySimple = (): void =>
  _test_json_isStringify("ArraySimple")<ArraySimple>(ArraySimple)((input) =>
    typia.json.isStringify<ArraySimple>(input),
  );
