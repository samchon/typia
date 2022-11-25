import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectAlias = _test_assertClone(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createAssertClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
