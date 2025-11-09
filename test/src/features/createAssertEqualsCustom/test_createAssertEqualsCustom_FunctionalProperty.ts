import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_FunctionalProperty = (): void => _test_assertEquals(CustomGuardError)(
    "FunctionalProperty",
)<FunctionalProperty>(
    FunctionalProperty
)(typia.createAssertEquals<FunctionalProperty>((p) => new CustomGuardError(p)));
