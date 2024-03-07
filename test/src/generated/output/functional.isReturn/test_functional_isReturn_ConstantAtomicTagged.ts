import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_functional_isReturn_ConstantAtomicTagged =
  _test_functional_isReturn("ConstantAtomicTagged")(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      (input: ConstantAtomicTagged): ConstantAtomicTagged | null => {
        const result = p(input);
        return ((input: any): input is ConstantAtomicTagged => {
          const $io0 = (input: any): boolean =>
            ("latest" === input.id ||
              ("string" === typeof input.id &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.id,
                ))) &&
            (-1 === input.age ||
              ("number" === typeof input.age &&
                Math.floor(input.age) === input.age &&
                0 <= input.age &&
                input.age <= 4294967295 &&
                input.age <= 100));
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );
