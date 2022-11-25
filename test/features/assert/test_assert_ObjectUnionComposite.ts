import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectUnionComposite = _test_assert(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => TSON.assert(input),
    ObjectUnionComposite.SPOILERS,
);