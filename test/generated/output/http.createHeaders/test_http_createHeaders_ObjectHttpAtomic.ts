import typia from "../../../../src";
import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_createHeaders_ObjectHttpAtomic = _test_http_headers(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpAtomic> => {
    const $boolean = (typia.http.createHeaders as any).boolean;
    const $bigint = (typia.http.createHeaders as any).bigint;
    const $number = (typia.http.createHeaders as any).number;
    const output = {
      boolean: $boolean(input.boolean),
      bigint: $bigint(input.bigint),
      number: $number(input.number),
      string: input.string,
    };
    return output as any;
  },
);
