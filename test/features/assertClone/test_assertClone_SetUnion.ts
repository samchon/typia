import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { SetUnion } from "../../structures/SetUnion";

export const test_assertClone_SetUnion = _test_assertClone(
    "SetUnion",
    SetUnion.generate,
    (input) => typia.assertClone<SetUnion>(input),
    SetUnion.SPOILERS,
);
