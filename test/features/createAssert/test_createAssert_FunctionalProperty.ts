import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssert_FunctionalProperty = _test_assert(
    "FunctionalProperty",
)<FunctionalProperty>(
    FunctionalProperty
)(typia.createAssert<FunctionalProperty>());
