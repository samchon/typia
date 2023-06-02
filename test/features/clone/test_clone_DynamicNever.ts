import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_DynamicNever = _test_clone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => typia.clone(input),
);
