import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_validateEquals_ObjectDescription = (): void =>
  _test_validateEquals("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) => typia.validateEquals<ObjectDescription>(input));
