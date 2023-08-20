import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertPrune_ObjectAlias = _test_assertPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.assertPrune<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);
