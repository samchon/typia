import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_misc_isPrune_ObjectUnionDouble = _test_misc_isPrune(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)((input) =>
  ((input: any): input is ObjectUnionDouble => {
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
    const prune = (input: ObjectUnionDouble): void => {
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
      const $throws = (typia.misc.isPrune as any).throws;
      const $pp0 = (input: any) =>
        input.forEach((elem: any) => {
          if ("object" === typeof elem && null !== elem) $pu0(elem);
        });
      const $po0 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po1(input.value);
        if ("object" === typeof input.child && null !== input.child)
          $pu1(input.child);
        for (const key of Object.keys(input)) {
          if ("value" === key || "child" === key) continue;
          delete input[key];
        }
      };
      const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key) continue;
          delete input[key];
        }
      };
      const $po2 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po3(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po3 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("y" === key) continue;
          delete input[key];
        }
      };
      const $po4 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po5(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po5 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("y" === key) continue;
          delete input[key];
        }
      };
      const $po6 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po7(input.value);
        if ("object" === typeof input.child && null !== input.child)
          $pu2(input.child);
        for (const key of Object.keys(input)) {
          if ("value" === key || "child" === key) continue;
          delete input[key];
        }
      };
      const $po7 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("x" === key) continue;
          delete input[key];
        }
      };
      const $po8 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po9(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po9 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("y" === key) continue;
          delete input[key];
        }
      };
      const $po10 = (input: any): any => {
        if ("object" === typeof input.value && null !== input.value)
          $po11(input.value);
        for (const key of Object.keys(input)) {
          if ("value" === key) continue;
          delete input[key];
        }
      };
      const $po11 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("y" === key) continue;
          delete input[key];
        }
      };
      const $pu0 = (input: any): any =>
        (() => {
          if ($io6(input)) return $po6(input);
          else if ($io0(input)) return $po0(input);
          else
            $throws({
              expected: "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
              value: input,
            });
        })();
      const $pu1 = (input: any): any =>
        (() => {
          if ($io4(input)) return $po4(input);
          else if ($io2(input)) return $po2(input);
          else
            $throws({
              expected: "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
              value: input,
            });
        })();
      const $pu2 = (input: any): any =>
        (() => {
          if ($io10(input)) return $po10(input);
          else if ($io8(input)) return $po8(input);
          else
            $throws({
              expected: "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
              value: input,
            });
        })();
      if (Array.isArray(input)) $pp0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
