import typia from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectHierarchical = _test_stringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createStringify<ObjectHierarchical>(),
);
