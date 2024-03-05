import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_assertStringify_ObjectGenericArray =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    typia.json.assertStringify<ObjectGenericArray>(input),
  );
