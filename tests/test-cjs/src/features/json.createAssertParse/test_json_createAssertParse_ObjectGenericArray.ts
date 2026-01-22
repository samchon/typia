import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createAssertParse_ObjectGenericArray = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)(
    typia.json.createAssertParse<ObjectGenericArray>(),
  );
