import typia from "typia";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectGenericAlias = _test_equals(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createEquals<ObjectGenericAlias>(),
);
