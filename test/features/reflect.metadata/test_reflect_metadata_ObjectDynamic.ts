import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_reflect_metadata_ObjectDynamic = _test_reflect_metadata(
    "ObjectDynamic",
)(typia.reflect.metadata<[ObjectDynamic]>());
