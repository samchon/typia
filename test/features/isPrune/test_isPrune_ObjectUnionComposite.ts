import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_isPrune_ObjectUnionComposite = _test_isPrune(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isPrune(input),
    ObjectUnionComposite.SPOILERS,
);
