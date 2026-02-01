import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createValidateEquals_ObjectTuple = (): void => _test_validateEquals(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)(typia.createValidateEquals<ObjectTuple>());
