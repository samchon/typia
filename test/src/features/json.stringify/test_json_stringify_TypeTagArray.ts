import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_stringify_TypeTagArray = (): void =>
  _test_json_stringify("TypeTagArray")<TypeTagArray>(TypeTagArray)((input) =>
    typia.json.stringify<TypeTagArray>(input),
  );
