import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertEquals_ObjectAlias = _test_assertEquals(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) => typia.assertEquals<ObjectAlias>(input));
