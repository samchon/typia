import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_isPrune_ObjectGenericUnion = _test_isPrune(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isPrune<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
