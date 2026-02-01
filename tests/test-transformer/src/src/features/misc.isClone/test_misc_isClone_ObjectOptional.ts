import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_isClone_ObjectOptional = (): void => _test_misc_isClone(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.misc.isClone<ObjectOptional>(input));
