import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_reflect_metadata_ClassGetter = _test_reflect_metadata(
    "ClassGetter",
)(typia.reflect.metadata<[ClassGetter]>());
