import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_reflect_metadata_ObjectRecursive = _test_reflect_metadata(
    "ObjectRecursive",
)(typia.reflect.metadata<[ObjectRecursive]>());
