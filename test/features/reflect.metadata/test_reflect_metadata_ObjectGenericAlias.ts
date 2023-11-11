import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_reflect_metadata_ObjectGenericAlias = _test_reflect_metadata(
    "ObjectGenericAlias",
)(typia.reflect.metadata<[ObjectGenericAlias]>());
