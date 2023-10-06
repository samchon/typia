import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_is_ObjectRequired = _test_is(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.is<ObjectRequired>(input));
