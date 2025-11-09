import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createClone_ObjectOptional = (): void => _test_misc_clone(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.misc.createClone<ObjectOptional>());
