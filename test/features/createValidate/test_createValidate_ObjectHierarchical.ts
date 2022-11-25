import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectHierarchical = _test_validate(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    TSON.createValidate<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);