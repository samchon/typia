import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectDescription = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectDescription",
)<ObjectDescription>(
    ObjectDescription
)((input) => typia.assertEquals<ObjectDescription>(input, (p) => new CustomGuardError(p)));
