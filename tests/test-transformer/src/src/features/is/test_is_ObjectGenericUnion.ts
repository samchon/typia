import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_is_ObjectGenericUnion = (): void => _test_is(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)((input) => typia.is<ObjectGenericUnion>(input));
