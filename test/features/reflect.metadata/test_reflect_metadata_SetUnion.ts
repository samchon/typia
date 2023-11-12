import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { SetUnion } from "../../structures/SetUnion";

export const test_reflect_metadata_SetUnion = _test_reflect_metadata(
    "SetUnion",
)(typia.reflect.metadata<[SetUnion]>());
