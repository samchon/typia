import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createAssertPrune_ObjectHierarchical =
    _test_misc_assertPrune("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )(typia.misc.createAssertPrune<ObjectHierarchical>());
