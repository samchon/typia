import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_object_union_double =
    _test_assert_stringify(
        "double union object",
        ObjectUnionDouble.generate,
        TSON.createAssertStringify<ObjectUnionDouble>(),
        ObjectUnionDouble.SPOILERS,
    );
