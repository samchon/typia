import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_createPrune_ObjectUnionCompositePointer =
  _test_misc_prune("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer,
  )(typia.misc.createPrune<ObjectUnionCompositePointer>());
