import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalObjectUnion = _test_assert(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    typia.createAssert<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);