import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createValidateEquals_ObjectUnionDouble = (): void => _test_validateEquals(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createValidateEquals<ObjectUnionDouble>());
