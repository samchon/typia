import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_misc_isClone_ObjectDynamic = _test_misc_isClone(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)((input) => typia.misc.isClone<ObjectDynamic>(input));
