import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_equals_ObjectInternal = (): void => _test_equals(
    "ObjectInternal",
)<ObjectInternal>(
    ObjectInternal
)((input) => typia.equals<ObjectInternal>(input));
