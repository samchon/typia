import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_FunctionalTupleUnion = _test_isStringify(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    typia.createIsStringify<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
