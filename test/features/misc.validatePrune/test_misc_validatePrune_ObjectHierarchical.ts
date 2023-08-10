import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_validatePrune_ObjectHierarchical =
    _test_misc_validatePrune<ObjectHierarchical>(ObjectHierarchical)((input) =>
        typia.misc.validatePrune<ObjectHierarchical>(input),
    );
