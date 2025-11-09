import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createValidateEquals_ToJsonUnion = (): void => _test_validateEquals(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createValidateEquals<ToJsonUnion>());
