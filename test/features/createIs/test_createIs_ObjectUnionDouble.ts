import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    TSON.createIs<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);