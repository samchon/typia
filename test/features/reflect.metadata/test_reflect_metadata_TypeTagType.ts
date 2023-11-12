import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_reflect_metadata_TypeTagType = _test_reflect_metadata(
    "TypeTagType",
)(typia.reflect.metadata<[TypeTagType]>());
