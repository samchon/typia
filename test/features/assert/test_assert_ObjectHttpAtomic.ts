import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_assert_ObjectHttpAtomic = _test_assert(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    typia.assert<ObjectHttpAtomic>(input),
);
