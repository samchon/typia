import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createAssertEquals_ToJsonDouble = _test_assertEquals(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.createAssertEquals<ToJsonDouble>());
