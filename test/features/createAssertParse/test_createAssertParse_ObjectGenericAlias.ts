import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createAssertParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
