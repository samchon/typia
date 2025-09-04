import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_json_createIsStringify_ObjectRequired = (): void =>
  _test_json_isStringify("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    typia.json.createIsStringify<ObjectRequired>(),
  );
