import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_is_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.is<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
