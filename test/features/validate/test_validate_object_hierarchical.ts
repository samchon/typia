import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validate } from "./_test_validate";

export const test_validate_object_hierarchical = _test_validate(
    "hierarchical object",
    ObjectHierarchical.generate,
    (input) => TSON.validate(input),
    ObjectHierarchical.SPOILERS,
);
