import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicComposite = _test_stringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.stringify(input),
);
