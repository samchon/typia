import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createIsClone_ObjectUnionDouble = _test_isClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createIsClone<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
