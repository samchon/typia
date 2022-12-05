import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectGenericUnion = _test_validateClone(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createValidateClone<ObjectGenericUnion>(),
    ObjectGenericUnion.SPOILERS,
);
