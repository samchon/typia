import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertEquals_FunctionalObjectUnion = _test_assertEquals(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)(typia.createAssertEquals<FunctionalObjectUnion>());
