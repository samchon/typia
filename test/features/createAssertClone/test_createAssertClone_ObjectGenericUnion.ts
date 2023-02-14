import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectGenericUnion = _test_assertClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createAssertClone<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);