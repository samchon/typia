import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_FunctionalTupleUnion = _test_validateEquals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.validateEquals(input),
);
