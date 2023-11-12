import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_reflect_metadata_TypeTagMatrix = _test_reflect_metadata(
    "TypeTagMatrix",
)(typia.reflect.metadata<[TypeTagMatrix]>());
