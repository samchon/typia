import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_assertClone_DynamicNever = _test_assertClone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.assertClone<DynamicNever>(input),
    DynamicNever.SPOILERS,
);
