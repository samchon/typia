import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectGenericUnion = _test_isClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createIsClone<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
