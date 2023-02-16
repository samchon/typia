import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicComposite = _test_isParse(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIsParse<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
