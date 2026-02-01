import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createValidateEquals_ToJsonDouble = (): void => _test_validateEquals(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.createValidateEquals<ToJsonDouble>());
