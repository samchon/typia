import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_reflect_metadata_ObjectGeneric = _test_reflect_metadata(
    "ObjectGeneric",
)(typia.reflect.metadata<[ObjectGeneric]>());
