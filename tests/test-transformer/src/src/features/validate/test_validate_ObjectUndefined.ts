import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_validate_ObjectUndefined = (): void => _test_validate(
    "ObjectUndefined",
)<ObjectUndefined>(
    ObjectUndefined
)((input) => typia.validate<ObjectUndefined>(input));
