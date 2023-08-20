import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertPrune_ObjectGenericUnion = _test_assertPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.assertPrune<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
