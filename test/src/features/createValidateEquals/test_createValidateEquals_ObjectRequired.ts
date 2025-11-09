import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createValidateEquals_ObjectRequired = (): void => _test_validateEquals(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)(typia.createValidateEquals<ObjectRequired>());
