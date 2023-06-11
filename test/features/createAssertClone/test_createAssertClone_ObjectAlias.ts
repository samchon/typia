import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertClone_ObjectAlias = _test_assertClone(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createAssertClone<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
