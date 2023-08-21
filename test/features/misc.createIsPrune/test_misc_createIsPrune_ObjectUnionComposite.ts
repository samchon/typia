import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_isPrune_ObjectUnionComposite = _test_misc_isPrune(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.misc.createIsPrune<ObjectUnionComposite>(),
);
