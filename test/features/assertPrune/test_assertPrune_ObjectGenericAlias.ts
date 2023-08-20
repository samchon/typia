import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertPrune_ObjectGenericAlias = _test_assertPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertPrune<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
