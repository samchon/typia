import typia from "typia";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_DynamicComposite = _test_validateEquals(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createValidateEquals<DynamicComposite>(),
);
