import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_misc_createIsClone_ObjectUnionDouble = _test_misc_isClone(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
  (input: any): typia.Resolved<ObjectUnionDouble> | null => {
    const is = (input: any): input is ObjectUnionDouble => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "number" === typeof (input.value as any).x &&
        Number.isFinite((input.value as any).x) &&
        "object" === typeof input.child &&
        null !== input.child &&
        $iu1(input.child);
      const $io2 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "boolean" === typeof (input.value as any).y;
      const $io4 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "number" === typeof (input.value as any).y &&
        Number.isFinite((input.value as any).y);
      const $io6 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "string" === typeof (input.value as any).x &&
        "object" === typeof input.child &&
        null !== input.child &&
        $iu2(input.child);
      const $io8 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        "string" === typeof (input.value as any).y;
      const $io10 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io11(input.value);
      const $io11 = (input: any): boolean =>
        Array.isArray(input.y) &&
        input.y.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        );
      const $iu0 = (input: any): any =>
        (() => {
          if ($io6(input)) return $io6(input);
          else if ($io0(input)) return $io0(input);
          else return false;
        })();
      const $iu1 = (input: any): any =>
        (() => {
          if ($io4(input)) return $io4(input);
          else if ($io2(input)) return $io2(input);
          else return false;
        })();
      const $iu2 = (input: any): any =>
        (() => {
          if ($io10(input)) return $io10(input);
          else if ($io8(input)) return $io8(input);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    const clone = (
      input: ObjectUnionDouble,
    ): typia.Resolved<ObjectUnionDouble> => {
      const $io0 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io1(input.value) &&
        "object" === typeof input.child &&
        null !== input.child &&
        $iu1(input.child);
      const $io1 = (input: any): boolean => "number" === typeof input.x;
      const $io2 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io3(input.value);
      const $io3 = (input: any): boolean => "boolean" === typeof input.y;
      const $io4 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io5(input.value);
      const $io5 = (input: any): boolean => "number" === typeof input.y;
      const $io6 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io7(input.value) &&
        "object" === typeof input.child &&
        null !== input.child &&
        $iu2(input.child);
      const $io7 = (input: any): boolean => "string" === typeof input.x;
      const $io8 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io9(input.value);
      const $io9 = (input: any): boolean => "string" === typeof input.y;
      const $io10 = (input: any): boolean =>
        "object" === typeof input.value &&
        null !== input.value &&
        $io11(input.value);
      const $io11 = (input: any): boolean =>
        Array.isArray(input.y) &&
        input.y.every((elem: any) => "number" === typeof elem);
      const $iu1 = (input: any): any => $io4(input) || $io2(input);
      const $iu2 = (input: any): any => $io10(input) || $io8(input);
      const $throws = (typia.misc.createIsClone as any).throws;
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $cu0(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) => input.map((elem: any) => elem as any);
      const $co0 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co1(input.value)
            : (input.value as any),
        child:
          "object" === typeof input.child && null !== input.child
            ? $cu1(input.child)
            : (input.child as any),
      });
      const $co1 = (input: any): any => ({
        x: input.x as any,
      });
      const $co2 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co3(input.value)
            : (input.value as any),
      });
      const $co3 = (input: any): any => ({
        y: input.y as any,
      });
      const $co4 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co5(input.value)
            : (input.value as any),
      });
      const $co5 = (input: any): any => ({
        y: input.y as any,
      });
      const $co6 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co7(input.value)
            : (input.value as any),
        child:
          "object" === typeof input.child && null !== input.child
            ? $cu2(input.child)
            : (input.child as any),
      });
      const $co7 = (input: any): any => ({
        x: input.x as any,
      });
      const $co8 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co9(input.value)
            : (input.value as any),
      });
      const $co9 = (input: any): any => ({
        y: input.y as any,
      });
      const $co10 = (input: any): any => ({
        value:
          "object" === typeof input.value && null !== input.value
            ? $co11(input.value)
            : (input.value as any),
      });
      const $co11 = (input: any): any => ({
        y: Array.isArray(input.y) ? $cp1(input.y) : (input.y as any),
      });
      const $cu0 = (input: any): any =>
        (() => {
          if ($io6(input)) return $co6(input);
          else if ($io0(input)) return $co0(input);
          else
            $throws({
              expected: "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
              value: input,
            });
        })();
      const $cu1 = (input: any): any =>
        (() => {
          if ($io4(input)) return $co4(input);
          else if ($io2(input)) return $co2(input);
          else
            $throws({
              expected: "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
              value: input,
            });
        })();
      const $cu2 = (input: any): any =>
        (() => {
          if ($io10(input)) return $co10(input);
          else if ($io8(input)) return $co8(input);
          else
            $throws({
              expected: "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
              value: input,
            });
        })();
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
