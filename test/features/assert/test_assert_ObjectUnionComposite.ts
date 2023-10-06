import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assert_ObjectUnionComposite = _test_assert(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
    typia.assert<ObjectUnionComposite>(input),
);
