import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertPrune_ObjectGenericUnion = _test_assertPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createAssertPrune<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
