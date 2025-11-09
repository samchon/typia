import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_misc_createValidateClone_ObjectDate = (): void => _test_misc_validateClone(
    "ObjectDate",
)<ObjectDate>(
    ObjectDate
)(typia.misc.createValidateClone<ObjectDate>());
