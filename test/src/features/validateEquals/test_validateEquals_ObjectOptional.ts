import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_validateEquals_ObjectOptional = (): void => _test_validateEquals(
    "ObjectOptional",
)<ObjectOptional>(
    ObjectOptional
)((input) => typia.validateEquals<ObjectOptional>(input));
