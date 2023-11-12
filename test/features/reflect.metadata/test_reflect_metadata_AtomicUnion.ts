import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_reflect_metadata_AtomicUnion = _test_reflect_metadata(
    "AtomicUnion",
)(typia.reflect.metadata<[AtomicUnion]>());
