import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_assertPrune_ObjectHierarchical =
    _test_misc_assertPrune<ObjectHierarchical>(ObjectHierarchical)(
        typia.misc.createAssertPrune<ObjectHierarchical>(),
    );
