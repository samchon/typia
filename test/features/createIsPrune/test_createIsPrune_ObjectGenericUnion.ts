import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createIsPrune_ObjectGenericUnion = _test_isPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createIsPrune<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
