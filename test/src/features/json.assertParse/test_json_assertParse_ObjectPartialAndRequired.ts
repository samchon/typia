import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ObjectPartialAndRequired =
  _test_json_assertParse(TypeGuardError)(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
    typia.json.assertParse<ObjectPartialAndRequired>(input),
  );
