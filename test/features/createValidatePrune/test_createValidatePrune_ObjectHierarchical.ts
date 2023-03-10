import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createValidatePrune_ObjectHierarchical = _test_validatePrune(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createValidatePrune<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
