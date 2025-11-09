import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_misc_createClone_ObjectDescription = (): void => _test_misc_clone(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)(typia.misc.createClone<ObjectDescription>());
