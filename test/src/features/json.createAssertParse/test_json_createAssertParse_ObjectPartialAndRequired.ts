import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_createAssertParse_ObjectPartialAndRequired = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
    typia.json.createAssertParse<ObjectPartialAndRequired>(),
  );
