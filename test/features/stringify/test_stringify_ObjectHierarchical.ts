import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_stringify_ObjectHierarchical = _test_stringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.stringify(input),
);
