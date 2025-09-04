import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_json_createValidateStringify_ObjectDate = (): void =>
  _test_json_validateStringify("ObjectDate")<ObjectDate>(ObjectDate)(
    typia.json.createValidateStringify<ObjectDate>(),
  );
