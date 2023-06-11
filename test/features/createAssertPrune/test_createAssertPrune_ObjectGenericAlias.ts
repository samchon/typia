import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectGenericAlias = _test_assertPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createAssertPrune<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
