import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_misc_createIsPrune_TypeTagMatrix = _test_misc_isPrune(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input: any): input is TypeTagMatrix => {
  const is = (input: any): input is TypeTagMatrix => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.matrix) &&
      3 <= input.matrix.length &&
      input.matrix.length <= 3 &&
      input.matrix.every(
        (elem: any) =>
          Array.isArray(elem) &&
          4 <= elem.length &&
          elem.length <= 4 &&
          elem.every(
            (elem: any) =>
              "string" === typeof elem &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                elem,
              ),
          ),
      );
    return "object" === typeof input && null !== input && $io0(input);
  };
  const prune = (input: TypeTagMatrix): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("matrix" === key) continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  };
  if (!is(input)) return false;
  prune(input);
  return true;
});
