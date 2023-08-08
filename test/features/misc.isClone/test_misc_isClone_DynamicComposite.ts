import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_isClone_DynamicComposite = _test_misc_isClone(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.misc.isClone(input),
    DynamicComposite.SPOILERS,
);
