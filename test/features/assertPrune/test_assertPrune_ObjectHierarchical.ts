import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_assertPrune_ObjectHierarchical = _test_assertPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.assertPrune<ObjectHierarchical>(input),
    ObjectHierarchical.SPOILERS,
);
