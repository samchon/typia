import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_hierarchical = _test_validate(
    "hierarchical object",
    ObjectHierarchical.generate,
    TSON.createValidate<ObjectHierarchical>(),
    ObjectHierarchical.SPOILERS,
);
