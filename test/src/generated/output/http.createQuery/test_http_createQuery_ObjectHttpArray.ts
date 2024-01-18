import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createQuery_ObjectHttpArray = _test_http_query(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (input: string | URLSearchParams): typia.Resolved<ObjectHttpArray> => {
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      booleans: input
        .getAll("booleans")
        .map((elem: any) => $QueryReader.boolean(elem)),
      bigints: input
        .getAll("bigints")
        .map((elem: any) => $QueryReader.bigint(elem)),
      numbers: input
        .getAll("numbers")
        .map((elem: any) => $QueryReader.number(elem)),
      strings: input
        .getAll("strings")
        .map((elem: any) => $QueryReader.string(elem)),
      templates: input
        .getAll("templates")
        .map((elem: any) => $QueryReader.string(elem)),
    };
    return output as any;
  },
);
