import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectGenericAlias = _test_assertClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createAssertClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);