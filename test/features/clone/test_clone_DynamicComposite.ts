import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_clone_DynamicComposite = _test_clone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.clone(input),
);
