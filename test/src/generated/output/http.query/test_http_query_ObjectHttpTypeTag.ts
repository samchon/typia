import typia from "typia";

import { _test_http_query } from "../../../internal/_test_http_query";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_query_ObjectHttpTypeTag = _test_http_query(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  ((input: string | URLSearchParams): typia.Resolved<ObjectHttpTypeTag> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $QueryReader =
      require("typia/lib/functional/$QueryReader").$QueryReader;
    input = $QueryReader.params(input) as URLSearchParams;
    const output = {
      int32: $QueryReader.number(input.get("int32")),
      uint64: $QueryReader.bigint(input.get("uint64")),
      uuid: $QueryReader.string(input.get("uuid")),
      range: input
        .getAll("range")
        .map((elem: any) => $QueryReader.number(elem)),
      length: input
        .getAll("length")
        .map((elem: any) => $QueryReader.string(elem)),
    };
    return output as any;
  })(input),
);
