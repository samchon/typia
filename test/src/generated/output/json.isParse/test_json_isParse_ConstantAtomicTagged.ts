import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";
export const test_json_isParse_ConstantAtomicTagged = _test_json_isParse(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)((input) =>
  ((input: any): import("typia").Primitive<ConstantAtomicTagged> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
