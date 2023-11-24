import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_is_ClassClosure = _test_is("ClassClosure")<ClassClosure>(
  ClassClosure,
)((input) =>
  ((input: any): input is ClassClosure => {
    const $io0 = (input: any): boolean =>
      "string" === typeof input.id &&
      "something" === input.type &&
      "function" === typeof input.closure;
    return "object" === typeof input && null !== input && $io0(input);
  })(input),
);
