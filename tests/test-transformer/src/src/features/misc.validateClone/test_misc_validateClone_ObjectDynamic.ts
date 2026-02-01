import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_validateClone_ObjectDynamic = (): void => _test_misc_validateClone(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.misc.validateClone<ObjectDynamic>(input));
