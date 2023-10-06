import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createValidateEquals_ObjectHttpAtomic = _test_validateEquals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.createValidateEquals<ObjectHttpAtomic>(),
);
