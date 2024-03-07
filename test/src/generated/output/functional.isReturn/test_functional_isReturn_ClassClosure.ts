import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ClassClosure } from "../../../structures/ClassClosure";
export const test_functional_isReturn_ClassClosure = _test_functional_isReturn(
  "ClassClosure",
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) =>
    (input: ClassClosure): ClassClosure | null => {
      const result = p(input);
      return ((input: any): input is ClassClosure.Something => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          "something" === input.type &&
          "function" === typeof input.closure;
        return "object" === typeof input && null !== input && $io0(input);
      })(result)
        ? result
        : null;
    },
);
