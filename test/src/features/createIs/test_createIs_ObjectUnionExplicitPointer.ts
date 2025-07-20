import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createIs_ObjectUnionExplicitPointer = (): void =>
  _test_is("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer,
  )(typia.createIs<ObjectUnionExplicitPointer>());
