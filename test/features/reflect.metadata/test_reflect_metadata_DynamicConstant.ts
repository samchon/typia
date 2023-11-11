import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_reflect_metadata_DynamicConstant = _test_reflect_metadata(
    "DynamicConstant",
)(typia.reflect.metadata<[DynamicConstant]>());
