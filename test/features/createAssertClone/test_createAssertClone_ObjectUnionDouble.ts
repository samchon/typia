import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectUnionDouble = _test_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    TSON.createAssertClone<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);