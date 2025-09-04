import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_is_ObjectHttpAtomic = (): void =>
  _test_is("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
    typia.is<ObjectHttpAtomic>(input),
  );
