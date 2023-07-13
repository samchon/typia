import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertEquals_FunctionalTupleUnion = _test_assertEquals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createAssertEquals<FunctionalTupleUnion>(),
);
