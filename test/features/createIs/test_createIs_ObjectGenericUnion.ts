import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectGenericUnion = _test_is(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createIs<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);