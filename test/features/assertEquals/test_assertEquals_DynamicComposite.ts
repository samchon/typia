import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_DynamicComposite = _test_assertEquals(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.assertEquals(input),
);
