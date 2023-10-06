import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createEquals_FunctionalArrayUnion = _test_equals(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)(typia.createEquals<FunctionalArrayUnion>());
