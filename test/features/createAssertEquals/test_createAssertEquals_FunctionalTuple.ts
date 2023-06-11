import typia from "../../../src";

import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_createAssertEquals_FunctionalTuple = _test_assertEquals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createAssertEquals<FunctionalTuple>(),
);
