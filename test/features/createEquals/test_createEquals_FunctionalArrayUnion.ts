import typia from "typia";

import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalArrayUnion = _test_equals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    typia.createEquals<FunctionalArrayUnion>(),
);
