import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_DynamicComposite = _test_stringify(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createStringify<DynamicComposite>(),
);
