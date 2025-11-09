import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_validateEquals_ObjectHttpConstant = (): void => _test_validateEquals(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.validateEquals<ObjectHttpConstant>(input));
