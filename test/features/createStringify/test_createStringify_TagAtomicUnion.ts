import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagAtomicUnion = _test_stringify(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    typia.createStringify<TagAtomicUnion>(),
);