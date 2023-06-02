import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_createAssertEquals_FunctionalTuple = _test_assertEquals(
    "FunctionalTuple",
    FunctionalTuple.generate,
    typia.createAssertEquals<FunctionalTuple>(),
);
