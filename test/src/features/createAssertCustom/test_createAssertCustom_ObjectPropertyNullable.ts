import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectPropertyNullable = (): void => _test_assert(CustomGuardError)(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.createAssert<ObjectPropertyNullable>((p) => new CustomGuardError(p)));
