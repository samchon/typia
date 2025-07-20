import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_assertStringify_ObjectOptional = (): void =>
  _test_json_assertStringify(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) => typia.json.assertStringify<ObjectOptional>(input));
