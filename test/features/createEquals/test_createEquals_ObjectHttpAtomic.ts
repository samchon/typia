import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createEquals_ObjectHttpAtomic = _test_equals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(typia.createEquals<ObjectHttpAtomic>());
