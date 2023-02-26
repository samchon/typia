import typia from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_FunctionalValueUnion = _test_assertEquals(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    typia.createAssertEquals<FunctionalValueUnion>(),
);
