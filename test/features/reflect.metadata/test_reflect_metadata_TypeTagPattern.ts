import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_reflect_metadata_TypeTagPattern = _test_reflect_metadata(
    "TypeTagPattern",
)(typia.reflect.metadata<[TypeTagPattern]>());
