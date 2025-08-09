import typia from "typia";

import { _test_notation_general } from "../../internal/_test_notation_general";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_notation_kebab_ObjectAlias = (): void =>
  _test_notation_general("ObjectAlias")<ObjectAlias>(ObjectAlias)<
    typia.KebabCase<ObjectAlias>
  >({
    convert: (input) => typia.notations.kebab<ObjectAlias>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectAlias>>(),
  });