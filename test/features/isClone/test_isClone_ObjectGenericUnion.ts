import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_isClone_ObjectGenericUnion = _test_isClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.isClone<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
