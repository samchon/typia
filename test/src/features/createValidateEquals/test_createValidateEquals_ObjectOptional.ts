import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createValidateEquals_ObjectOptional = (): void => _test_validateEquals(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)(typia.createValidateEquals<ObjectOptional>());
