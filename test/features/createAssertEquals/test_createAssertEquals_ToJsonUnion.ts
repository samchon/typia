import typia from "../../../src";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonUnion = _test_assertEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createAssertEquals<ToJsonUnion>(),
);
