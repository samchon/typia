import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createIs_ArrayHierarchicalPointer = (): void =>
  _test_is("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )(typia.createIs<ArrayHierarchicalPointer>());
