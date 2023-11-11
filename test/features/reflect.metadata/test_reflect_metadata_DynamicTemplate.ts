import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_reflect_metadata_DynamicTemplate = _test_reflect_metadata(
    "DynamicTemplate",
)(typia.reflect.metadata<[DynamicTemplate]>());
