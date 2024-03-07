import typia from "typia";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
export const test_is_ArrayRepeatedUnion = _test_is(
  "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
  ((input: any): input is ArrayRepeatedUnion => {
    const $ip0 = (input: any) => {
      const array = input;
      const top = input[0];
      if (0 === input.length) return true;
      const arrayPredicators = [
        [
          (top: any[]): any => "string" === typeof top,
          (entire: any[]): any =>
            entire.every((elem: any) => "string" === typeof elem),
        ] as const,
        [
          (top: any[]): any =>
            null !== top &&
            undefined !== top &&
            (("number" === typeof top && Number.isFinite(top)) ||
              "boolean" === typeof top ||
              (Array.isArray(top) && ($ip0(top) || false))),
          (entire: any[]): any => $ia0(entire) || false,
        ] as const,
        [
          (top: any[]): any =>
            "object" === typeof top && null !== top && $io0(top),
          (entire: any[]): any =>
            entire.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ),
        ] as const,
      ];
      const passed = arrayPredicators.filter((pred: any) => pred[0](top));
      if (1 === passed.length) return passed[0]![1](array);
      else if (1 < passed.length)
        for (const pred of passed)
          if (array.every((value: any) => true === pred[0](value)))
            return pred[1](array);
      return false;
    };
    const $io0 = (input: any): boolean =>
      "object" === typeof input.scale &&
      null !== input.scale &&
      "number" === typeof (input.scale as any).x &&
      Number.isFinite((input.scale as any).x) &&
      "number" === typeof (input.scale as any).y &&
      Number.isFinite((input.scale as any).y) &&
      "number" === typeof (input.scale as any).z &&
      Number.isFinite((input.scale as any).z) &&
      "object" === typeof input.position &&
      null !== input.position &&
      "number" === typeof (input.position as any).x &&
      Number.isFinite((input.position as any).x) &&
      "number" === typeof (input.position as any).y &&
      Number.isFinite((input.position as any).y) &&
      "number" === typeof (input.position as any).z &&
      Number.isFinite((input.position as any).z) &&
      "object" === typeof input.rotate &&
      null !== input.rotate &&
      "number" === typeof (input.rotate as any).x &&
      Number.isFinite((input.rotate as any).x) &&
      "number" === typeof (input.rotate as any).y &&
      Number.isFinite((input.rotate as any).y) &&
      "number" === typeof (input.rotate as any).z &&
      Number.isFinite((input.rotate as any).z) &&
      "object" === typeof input.pivot &&
      null !== input.pivot &&
      "number" === typeof (input.pivot as any).x &&
      Number.isFinite((input.pivot as any).x) &&
      "number" === typeof (input.pivot as any).y &&
      Number.isFinite((input.pivot as any).y) &&
      "number" === typeof (input.pivot as any).z &&
      Number.isFinite((input.pivot as any).z);
    const $ia0 = (input: any): any =>
      input.every(
        (elem: any) =>
          null !== elem &&
          undefined !== elem &&
          (("number" === typeof elem && Number.isFinite(elem)) ||
            "boolean" === typeof elem ||
            (Array.isArray(elem) && ($ip0(elem) || false))),
      );
    return (
      null !== input &&
      undefined !== input &&
      (("number" === typeof input && Number.isFinite(input)) ||
        "boolean" === typeof input ||
        (Array.isArray(input) && ($ip0(input) || false)))
    );
  })(input),
);
