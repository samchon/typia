import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_validate_ObjectHttpNullable = (): void => _test_validate(
    "ObjectHttpNullable",
)<ObjectHttpNullable>(
    ObjectHttpNullable
)((input) => typia.validate<ObjectHttpNullable>(input));
