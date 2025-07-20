import typia from "typia";

import { _test_http_headers } from "../../internal/_test_http_headers";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_headers_ObjectHttpAtomic = (): void =>
  _test_http_headers("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
    (input) => typia.http.headers<ObjectHttpAtomic>(input),
  );
