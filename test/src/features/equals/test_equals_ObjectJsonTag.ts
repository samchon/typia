import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_equals_ObjectJsonTag = (): void => _test_equals(
    "ObjectJsonTag",
)<ObjectJsonTag>(
    ObjectJsonTag
)((input) => typia.equals<ObjectJsonTag>(input));
