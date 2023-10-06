import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createValidate_ObjectHttpAtomic = _test_validate(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)(typia.createValidate<ObjectHttpAtomic>());
