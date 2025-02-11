import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_equals_ObjectHttpConstant = _test_equals(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.equals<ObjectHttpConstant>(input));
