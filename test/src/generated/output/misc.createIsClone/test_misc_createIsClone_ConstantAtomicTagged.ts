import typia from "typia";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_misc_createIsClone_ConstantAtomicTagged = _test_misc_isClone(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)(
  (input: any): import("typia").Resolved<ConstantAtomicTagged> | null => {
    const is = (input: any): input is ConstantAtomicTagged => {
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
    };
    const clone = (
      input: ConstantAtomicTagged,
    ): import("typia").Resolved<ConstantAtomicTagged> => {
      const $co0 = (input: any): any => ({
        id: input.id as any,
        age: input.age as any,
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
