import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectAlias = _test_assert(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createAssert<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);