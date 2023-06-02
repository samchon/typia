import typia from "../../../src";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ToJsonUnion = _test_assertStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createAssertStringify<ToJsonUnion>(),
);
