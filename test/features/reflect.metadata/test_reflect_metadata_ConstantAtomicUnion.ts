import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_reflect_metadata_ConstantAtomicUnion = _test_reflect_metadata(
    "ConstantAtomicUnion",
)(typia.reflect.metadata<[ConstantAtomicUnion]>());
