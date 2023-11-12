import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_reflect_metadata_TypeTagNaN = _test_reflect_metadata(
    "TypeTagNaN",
)(typia.reflect.metadata<[TypeTagNaN]>());
