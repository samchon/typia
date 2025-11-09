import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectPropertyNullable = (): void => _test_assert(CustomGuardError)(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)((input) => typia.assert<ObjectPropertyNullable>(input, (p) => new CustomGuardError(p)));
