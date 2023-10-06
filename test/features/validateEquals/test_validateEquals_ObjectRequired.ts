import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_validateEquals_ObjectRequired = _test_validateEquals(
    "ObjectRequired",
)<ObjectRequired>(
    ObjectRequired
)((input) => typia.validateEquals<ObjectRequired>(input));
