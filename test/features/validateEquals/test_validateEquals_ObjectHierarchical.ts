import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectHierarchical = _test_validateEquals(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.validateEquals(input),
);
