import typia from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ToJsonUnion = _test_assertClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.assertClone(input),
);
