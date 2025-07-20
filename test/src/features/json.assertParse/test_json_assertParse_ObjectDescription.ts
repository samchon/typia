import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_assertParse_ObjectDescription = (): void =>
  _test_json_assertParse(TypeGuardError)(
    "ObjectDescription",
  )<ObjectDescription>(ObjectDescription)((input) =>
    typia.json.assertParse<ObjectDescription>(input),
  );
