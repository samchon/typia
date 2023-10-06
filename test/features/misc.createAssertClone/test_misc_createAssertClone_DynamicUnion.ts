import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createAssertClone_DynamicUnion = _test_misc_assertClone(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.misc.createAssertClone<DynamicUnion>());
