import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_validateEquals_ObjectPartialAndRequired = (): void =>
  _test_validateEquals("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input) => typia.validateEquals<ObjectPartialAndRequired>(input));
