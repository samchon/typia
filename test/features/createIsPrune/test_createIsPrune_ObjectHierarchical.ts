import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createIsPrune_ObjectHierarchical = _test_isPrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createIsPrune<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
