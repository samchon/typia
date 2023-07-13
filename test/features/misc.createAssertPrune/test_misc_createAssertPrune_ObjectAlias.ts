import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_assertPrune_ObjectAlias = _test_misc_assertPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.misc.createAssertPrune<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
