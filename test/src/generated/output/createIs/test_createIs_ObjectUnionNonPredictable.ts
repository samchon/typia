import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
export const test_createIs_ObjectUnionNonPredictable = _test_is(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
  (input: any): input is ObjectUnionNonPredictable => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
      );
    const $io1 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      $io2(input.value);
    const $io2 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      $iu0(input.value);
    const $io3 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      "boolean" === typeof (input.value as any).value;
    const $io5 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      "number" === typeof (input.value as any).value &&
      Number.isFinite((input.value as any).value);
    const $io7 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      "string" === typeof (input.value as any).value;
    const $iu0 = (input: any): any =>
      (() => {
        if ($io7(input)) return $io7(input);
        if ($io5(input)) return $io5(input);
        if ($io3(input)) return $io3(input);
        return false;
      })();
    return "object" === typeof input && null !== input && $io0(input);
  },
);
