import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createEquals_ObjectUnionDouble = (): void => _test_equals(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createEquals<ObjectUnionDouble>());
