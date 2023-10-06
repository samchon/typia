import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_createPrune_ObjectHttpUndefindable = _test_misc_prune(
    "ObjectHttpUndefindable",
)<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)(typia.misc.createPrune<ObjectHttpUndefindable>());
