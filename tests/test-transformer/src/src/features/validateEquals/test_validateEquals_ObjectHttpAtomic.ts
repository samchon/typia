import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_validateEquals_ObjectHttpAtomic = (): void => _test_validateEquals(
    "ObjectHttpAtomic",
)<ObjectHttpAtomic>(
    ObjectHttpAtomic
)((input) => typia.validateEquals<ObjectHttpAtomic>(input));
