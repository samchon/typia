import typia from "typia";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_random } from "../internal/_test_random";

export const test_random_ObjectAlias = _test_random(
    "ObjectAlias",
    () => typia.random<ObjectAlias>(),
    typia.createAssert<typia.Primitive<ObjectAlias>>(),
);
