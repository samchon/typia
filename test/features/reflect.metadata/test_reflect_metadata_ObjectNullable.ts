import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_reflect_metadata_ObjectNullable = _test_reflect_metadata(
    "ObjectNullable",
)(typia.reflect.metadata<[ObjectNullable]>());
