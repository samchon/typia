import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_isParse_ObjectUnionDouble = _test_isParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.isParse<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
