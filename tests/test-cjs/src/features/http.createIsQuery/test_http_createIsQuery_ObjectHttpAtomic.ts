import typia from "typia";

import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createIsQuery_ObjectHttpAtomic = (): void =>
  _test_http_isQuery("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.http.createIsQuery<ObjectHttpAtomic>(),
  );
