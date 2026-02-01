import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_isClone_ObjectTuple = (): void => _test_misc_isClone(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.misc.isClone<ObjectTuple>(input));
