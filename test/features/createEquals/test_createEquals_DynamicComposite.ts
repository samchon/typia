import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_DynamicComposite = _test_equals(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createEquals<DynamicComposite>(),
);
