import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectHierarchical = _test_is(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => TSON.is(input),
    ObjectHierarchical.SPOILERS,
);