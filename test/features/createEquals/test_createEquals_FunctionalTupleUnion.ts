import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalTupleUnion = _test_equals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createEquals<FunctionalTupleUnion>(),
);