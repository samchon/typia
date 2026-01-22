import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_json_stringify_ObjectDescription = (): void =>
  _test_json_stringify("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) => typia.json.stringify<ObjectDescription>(input));
