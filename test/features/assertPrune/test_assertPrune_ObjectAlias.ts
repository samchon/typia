import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ObjectAlias = _test_assertPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.assertPrune(input),
    ObjectAlias.SPOILERS,
);