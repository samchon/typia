import typia from "typia";

import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_FunctionalArrayUnion = _test_assertEquals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    typia.createAssertEquals<FunctionalArrayUnion>(),
);
