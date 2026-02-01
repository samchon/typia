import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_isClone_ObjectDescription = (): void => _test_misc_isClone(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((input) => typia.misc.isClone<ObjectDescription>(input));
