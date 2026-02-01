import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_createClone_ObjectDynamic = (): void => _test_misc_clone(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)(typia.misc.createClone<ObjectDynamic>());
