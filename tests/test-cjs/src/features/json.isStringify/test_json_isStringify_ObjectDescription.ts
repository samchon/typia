import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_isStringify_ObjectDescription = (): void =>
  _test_json_isStringify("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) => typia.json.isStringify<ObjectDescription>(input));
