import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_reflect_metadata_ObjectHierarchical = _test_reflect_metadata(
    "ObjectHierarchical",
)(typia.reflect.metadata<[ObjectHierarchical]>());
