import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicComposite = _test_clone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.clone(input),
);
