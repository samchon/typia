import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createValidateEquals_DynamicUnion = _test_validateEquals(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.createValidateEquals<DynamicUnion>());
