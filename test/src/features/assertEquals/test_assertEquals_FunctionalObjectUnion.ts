import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_assertEquals_FunctionalObjectUnion = (): void => _test_assertEquals(TypeGuardError)(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((input) => typia.assertEquals<FunctionalObjectUnion>(input));
