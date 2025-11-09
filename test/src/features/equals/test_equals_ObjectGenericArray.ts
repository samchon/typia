import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_equals_ObjectGenericArray = (): void => _test_equals(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)((input) => typia.equals<ObjectGenericArray>(input));
