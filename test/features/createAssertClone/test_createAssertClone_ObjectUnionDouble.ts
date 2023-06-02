import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertClone_ObjectUnionDouble = _test_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createAssertClone<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
