import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_validateEquals_ObjectClosure = (): void => _test_validateEquals(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)((input) => typia.validateEquals<ObjectClosure>(input));
