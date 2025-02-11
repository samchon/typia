import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { TypeGuardError } from "typia";

export const test_assertEquals_FunctionalProperty = _test_assertEquals(TypeGuardError)(
    "FunctionalProperty",
)<FunctionalProperty>(
    FunctionalProperty
)((input) => typia.assertEquals<FunctionalProperty>(input));
