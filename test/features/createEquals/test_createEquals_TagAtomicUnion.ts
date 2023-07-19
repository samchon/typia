import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_equals_TagAtomicUnion = _test_equals<TagAtomicUnion>(
    TagAtomicUnion,
)(typia.createEquals<TagAtomicUnion>());
