import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_assertClone_ObjectDynamic = _test_misc_assertClone(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.misc.assertClone<ObjectDynamic>(input));
