import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_DynamicComposite = _test_isPrune(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.isPrune(input),
    DynamicComposite.SPOILERS,
);
