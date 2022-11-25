import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectAlias = _test_assertStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    TSON.createAssertStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
