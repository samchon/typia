import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectUnionDouble = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)((input) => typia.assertEquals<ObjectUnionDouble>(input));
