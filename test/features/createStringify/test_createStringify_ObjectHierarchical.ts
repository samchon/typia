import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createStringify_ObjectHierarchical = _test_stringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    typia.createStringify<ObjectHierarchical>(),
);
