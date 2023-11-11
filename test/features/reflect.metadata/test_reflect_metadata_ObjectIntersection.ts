import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_reflect_metadata_ObjectIntersection = _test_reflect_metadata(
    "ObjectIntersection",
)(typia.reflect.metadata<[ObjectIntersection]>());
