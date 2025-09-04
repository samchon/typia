import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_validateClone_ObjectDescription = (): void =>
  _test_misc_validateClone("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) => typia.misc.validateClone<ObjectDescription>(input));
