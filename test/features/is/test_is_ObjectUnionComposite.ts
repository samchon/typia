import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUnionComposite = _test_is(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.is(input),
    ObjectUnionComposite.SPOILERS,
);
