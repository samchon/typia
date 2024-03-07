import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectClosure } from "../../../structures/ObjectClosure";
export const test_functional_isReturn_ObjectClosure = _test_functional_isReturn(
  "ObjectClosure",
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) =>
    (input: ObjectClosure): ObjectClosure | null => {
      const result = p(input);
      return ((input: any): input is ObjectClosure.IRecord => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id && "function" === typeof input.open;
        return "object" === typeof input && null !== input && $io0(input);
      })(result)
        ? result
        : null;
    },
);
