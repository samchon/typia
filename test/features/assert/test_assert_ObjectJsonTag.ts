import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_assert_ObjectJsonTag = _test_assert<ObjectJsonTag>(
    ObjectJsonTag,
)((input) => typia.assert<ObjectJsonTag>(input));
