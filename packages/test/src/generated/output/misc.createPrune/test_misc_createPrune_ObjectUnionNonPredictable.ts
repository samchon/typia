import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_misc_createPrune_ObjectUnionNonPredictable = _test_misc_prune(
  "ObjectUnionNonPredictable",
)<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
  (input: ObjectUnionNonPredictable): void => {
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
      $io4(input.value);
    const $io4 = (input: any): boolean => "boolean" === typeof input.value;
    const $io5 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      $io6(input.value);
    const $io6 = (input: any): boolean => "number" === typeof input.value;
    const $io7 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      $io8(input.value);
    const $io8 = (input: any): boolean => "string" === typeof input.value;
    const $iu0 = (input: any): any => $io7(input) || $io5(input) || $io3(input);
    const $throws = (typia.misc.createPrune as any).throws;
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po1(elem);
      });
    const $po0 = (input: any): any => {
      if (Array.isArray(input.value)) $pp0(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po1 = (input: any): any => {
      if ("object" === typeof input.value && null !== input.value)
        $po2(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po2 = (input: any): any => {
      if ("object" === typeof input.value && null !== input.value)
        $pu0(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po3 = (input: any): any => {
      if ("object" === typeof input.value && null !== input.value)
        $po4(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po4 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po5 = (input: any): any => {
      if ("object" === typeof input.value && null !== input.value)
        $po6(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po6 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po7 = (input: any): any => {
      if ("object" === typeof input.value && null !== input.value)
        $po8(input.value);
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $po8 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if ("value" === key) continue;
        delete input[key];
      }
    };
    const $pu0 = (input: any): any =>
      (() => {
        if ($io7(input)) return $po7(input);
        else if ($io5(input)) return $po5(input);
        else if ($io3(input)) return $po3(input);
        else
          $throws({
            expected:
              "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
            value: input,
          });
      })();
    if ("object" === typeof input && null !== input) $po0(input);
  },
);
