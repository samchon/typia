import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_isPrune_ObjectHierarchical = _test_misc_isPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.misc.isPrune(input),
    ObjectHierarchical.SPOILERS,
);
