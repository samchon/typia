import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_misc_createClone_ArrayUnion = _test_misc_clone(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input: ArrayUnion): typia.Resolved<ArrayUnion> => {
  const $throws = (typia.misc.createClone as any).throws;
  const $cp0 = (input: any) => {
    const array = input;
    const top = input[0];
    if (0 === input.length) return [];
    const arrayPredicators = [
      [
        (top: any[]): any => "boolean" === typeof top,
        (entire: any[]): any => entire.map((elem: any) => elem as any),
      ] as const,
      [
        (top: any[]): any => "number" === typeof top,
        (entire: any[]): any => entire.map((elem: any) => elem as any),
      ] as const,
      [
        (top: any[]): any => "string" === typeof top,
        (entire: any[]): any => entire.map((elem: any) => elem as any),
      ] as const,
    ];
    const passed = arrayPredicators.filter((pred: any) => pred[0](top));
    if (1 === passed.length) return passed[0]![1](array);
    else if (1 < passed.length)
      for (const pred of passed)
        if (array.every((value: any) => true === pred[0](value)))
          return pred[1](array);
    $throws({
      expected: "(Array<boolean> | Array<number> | Array<string>)",
      value: input,
    });
  };
  const $cp1 = (input: any) =>
    input.map((elem: any) =>
      Array.isArray(elem) ? $cp0(elem) : (elem as any),
    );
  return Array.isArray(input) ? $cp1(input) : (input as any);
});
