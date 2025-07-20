import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_assertStringify_ObjectUndefined = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectUndefined",
  )<ObjectUndefined>(ObjectUndefined)((input) =>
    typia.json.assertStringify<ObjectUndefined>(input),
  );
