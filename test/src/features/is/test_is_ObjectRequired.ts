import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_is_ObjectRequired = (): void => _test_is(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.is<ObjectRequired>(input));
