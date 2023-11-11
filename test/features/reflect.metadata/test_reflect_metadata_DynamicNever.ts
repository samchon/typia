import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_reflect_metadata_DynamicNever = _test_reflect_metadata(
    "DynamicNever",
)(typia.reflect.metadata<[DynamicNever]>());
