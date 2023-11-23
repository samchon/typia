import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_is_ObjectHttpAtomic = _test_is(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  ((input: any): input is ObjectHttpAtomic => {
    return (
      "object" === typeof input &&
      null !== input &&
      "boolean" === typeof (input as any).boolean &&
      "bigint" === typeof (input as any).bigint &&
      "number" === typeof (input as any).number &&
      Number.isFinite((input as any).number) &&
      "string" === typeof (input as any).string
    );
  })(input),
);
