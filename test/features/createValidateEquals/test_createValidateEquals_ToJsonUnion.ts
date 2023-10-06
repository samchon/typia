import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createValidateEquals_ToJsonUnion = _test_validateEquals(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)(typia.createValidateEquals<ToJsonUnion>());
