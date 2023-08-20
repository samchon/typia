import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertClone_DynamicComposite = _test_assertClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assertClone<DynamicComposite>(input),
    DynamicComposite.SPOILERS,
);
