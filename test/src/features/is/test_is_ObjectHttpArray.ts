import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_is_ObjectHttpArray = (): void => _test_is(
    "ObjectHttpArray",
)<ObjectHttpArray>(
    ObjectHttpArray
)((input) => typia.is<ObjectHttpArray>(input));
