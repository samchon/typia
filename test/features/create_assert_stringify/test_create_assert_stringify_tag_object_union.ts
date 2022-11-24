import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_tag_object_union =
    _test_assert_stringify(
        "object union tag",
        TagObjectUnion.generate,
        TSON.createAssertStringify<TagObjectUnion>(),
        TagObjectUnion.SPOILERS,
    );
