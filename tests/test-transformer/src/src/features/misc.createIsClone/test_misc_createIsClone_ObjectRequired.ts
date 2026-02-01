import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_createIsClone_ObjectRequired = (): void => _test_misc_isClone(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.misc.createIsClone<ObjectRequired>());
