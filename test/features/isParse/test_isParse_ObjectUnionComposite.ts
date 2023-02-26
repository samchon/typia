import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_isParse_ObjectUnionComposite = _test_isParse(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isParse<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
