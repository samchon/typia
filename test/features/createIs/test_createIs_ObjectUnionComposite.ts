import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_is_ObjectUnionComposite = _test_is(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.createIs<ObjectUnionComposite>(),
);
