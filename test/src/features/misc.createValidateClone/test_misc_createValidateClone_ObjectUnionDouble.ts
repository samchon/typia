import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createValidateClone_ObjectUnionDouble = (): void => _test_misc_validateClone(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.misc.createValidateClone<ObjectUnionDouble>());
