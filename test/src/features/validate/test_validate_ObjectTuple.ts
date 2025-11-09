import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_validate_ObjectTuple = (): void => _test_validate(
    "ObjectTuple",
)<ObjectTuple>(
    ObjectTuple
)((input) => typia.validate<ObjectTuple>(input));
