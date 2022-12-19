import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createAssertParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);