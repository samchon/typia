import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_random } from "../../internal/_test_random";

export const test_random_ObjectGenericAlias = _test_random(
    "ObjectGenericAlias",
    () => typia.random<ObjectGenericAlias>(),
typia.createAssert<typia.Primitive<ObjectGenericAlias>>(),
);
