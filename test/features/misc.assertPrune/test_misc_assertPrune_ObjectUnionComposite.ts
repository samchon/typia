import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_assertPrune_ObjectUnionComposite =
    _test_misc_assertPrune<ObjectUnionComposite>(ObjectUnionComposite)(
        (input) => typia.misc.assertPrune<ObjectUnionComposite>(input),
    );
