import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_misc_createIsPrune_ConstantAtomicTagged = _test_misc_isPrune(
  "ConstantAtomicTagged",
)<ConstantAtomicTagged>(ConstantAtomicTagged)(
  (input: any): input is ConstantAtomicTagged => {
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
    const prune = (input: ConstantAtomicTagged): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("id" === key || "age" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
