import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectGenericUnion = _test_validateEquals(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    TSON.createValidateEquals<ObjectGenericUnion>(),
);