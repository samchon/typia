import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_validateClone_TypeTagObjectUnion = (): void => _test_misc_validateClone(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(
    TypeTagObjectUnion
)((input) => typia.misc.validateClone<TypeTagObjectUnion>(input));
