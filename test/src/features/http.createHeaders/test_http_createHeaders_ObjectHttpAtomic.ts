import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createHeaders_ObjectHttpAtomic = (): void =>
  _test_http_headers("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    typia.http.createHeaders<ObjectHttpAtomic>(),
  );
