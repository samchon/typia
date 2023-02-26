import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertEquals_DynamicComposite = _test_assertEquals(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assertEquals(input),
);
