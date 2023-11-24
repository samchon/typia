import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createValidateStringify_ArraySimple =
  _test_json_validateStringify("ArraySimple")<ArraySimple>(ArraySimple)(
    typia.json.createValidateStringify<ArraySimple>(),
  );
