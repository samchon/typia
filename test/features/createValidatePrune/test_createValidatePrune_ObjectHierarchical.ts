import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectHierarchical = _test_validatePrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidatePrune<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
