import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_reflect_metadata_NativeAlias = _test_reflect_metadata(
    "NativeAlias",
)(typia.reflect.metadata<[NativeAlias]>());
