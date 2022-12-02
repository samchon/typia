import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectHierarchical = _test_isClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => TSON.isClone(input),
    ObjectHierarchical.SPOILERS,
);
