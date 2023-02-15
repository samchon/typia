import typia from "typia";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ToJsonUnion = _test_isStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.isStringify(input),
);
