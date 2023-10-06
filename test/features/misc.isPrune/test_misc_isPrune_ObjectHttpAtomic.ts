import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_isPrune_ObjectHttpAtomic = _test_misc_isPrune(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    typia.misc.isPrune<ObjectHttpAtomic>(input),
);
