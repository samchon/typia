import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectUnionDouble = (): void => _test_assert(CustomGuardError)(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createAssert<ObjectUnionDouble>((p) => new CustomGuardError(p)));
