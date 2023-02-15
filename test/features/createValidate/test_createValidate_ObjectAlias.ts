import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectAlias = _test_validate(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createValidate<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
