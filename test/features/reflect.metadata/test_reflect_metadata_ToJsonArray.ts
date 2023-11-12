import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_reflect_metadata_ToJsonArray = _test_reflect_metadata(
    "ToJsonArray",
)(typia.reflect.metadata<[ToJsonArray]>());
