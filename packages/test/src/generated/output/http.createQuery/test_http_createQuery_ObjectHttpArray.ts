import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createQuery_ObjectHttpArray = _test_http_query(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpArray> => {
    const $params = (typia.http.createQuery as any).params;
    const $boolean = (typia.http.createQuery as any).boolean;
    const $bigint = (typia.http.createQuery as any).bigint;
    const $number = (typia.http.createQuery as any).number;
    const $string = (typia.http.createQuery as any).string;
    input = $params(input) as URLSearchParams;
    const output = {
      booleans: input.getAll("booleans").map((elem: any) => $boolean(elem)),
      bigints: input.getAll("bigints").map((elem: any) => $bigint(elem)),
      numbers: input.getAll("numbers").map((elem: any) => $number(elem)),
      strings: input.getAll("strings").map((elem: any) => $string(elem)),
      templates: input.getAll("templates").map((elem: any) => $string(elem)),
    };
    return output as any;
  },
);
