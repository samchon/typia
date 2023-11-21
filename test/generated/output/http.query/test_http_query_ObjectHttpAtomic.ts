import typia from "../../../../src";
import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_http_query_ObjectHttpAtomic = _test_http_query(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)((input) =>
  ((input: string | URLSearchParams): typia.Resolved<ObjectHttpAtomic> => {
    const $params = (typia.http.query as any).params;
    const $boolean = (typia.http.query as any).boolean;
    const $bigint = (typia.http.query as any).bigint;
    const $number = (typia.http.query as any).number;
    const $string = (typia.http.query as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      boolean: $boolean(input.get("boolean")),
      bigint: $bigint(input.get("bigint")),
      number: $number(input.get("number")),
      string: $string(input.get("string")),
    };
    return output as any;
  })(input),
);
