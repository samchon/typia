import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_reflect_metadata_ToJsonUnion = _test_reflect_metadata(
    "ToJsonUnion",
)(typia.reflect.metadata<[ToJsonUnion]>());
