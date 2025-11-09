import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_createValidateParse_ObjectDescription = (): void =>
  _test_json_validateParse("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )(typia.json.createValidateParse<ObjectDescription>());
