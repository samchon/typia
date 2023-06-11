import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertPrune_ObjectUnionDouble = _test_assertPrune(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createAssertPrune<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
