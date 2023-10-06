import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createValidatePrune_ObjectUnionDouble = _test_misc_validatePrune(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.misc.createValidatePrune<ObjectUnionDouble>());
