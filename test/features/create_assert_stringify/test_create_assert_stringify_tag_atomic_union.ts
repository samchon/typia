import TSON from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_tag_atomic_union =
    _test_assert_stringify(
        "atomic union tag",
        TagAtomicUnion.generate,
        TSON.createAssertStringify<TagAtomicUnion>(),
        TagAtomicUnion.SPOILERS,
    );
