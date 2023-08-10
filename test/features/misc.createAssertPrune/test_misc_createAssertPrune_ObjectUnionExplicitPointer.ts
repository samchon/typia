import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_misc_assertPrune_ObjectUnionExplicitPointer =
    _test_misc_assertPrune<ObjectUnionExplicitPointer>(
        ObjectUnionExplicitPointer,
    )(typia.misc.createAssertPrune<ObjectUnionExplicitPointer>());
