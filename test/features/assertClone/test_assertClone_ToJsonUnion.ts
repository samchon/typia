import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_assertClone_ToJsonUnion = _test_assertClone(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.assertClone<ToJsonUnion>(input),
);
