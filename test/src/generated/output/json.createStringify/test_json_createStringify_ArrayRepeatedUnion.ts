import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
export const test_json_createStringify_ArrayRepeatedUnion =
  _test_json_stringify("ArrayRepeatedUnion")<ArrayRepeatedUnion>(
    ArrayRepeatedUnion,
  )((input: ArrayRepeatedUnion): string => {
    const $io0 = (input: any): boolean =>
      "object" === typeof input.scale &&
      null !== input.scale &&
      $io1(input.scale) &&
      "object" === typeof input.position &&
      null !== input.position &&
      $io1(input.position) &&
      "object" === typeof input.rotate &&
      null !== input.rotate &&
      $io1(input.rotate) &&
      "object" === typeof input.pivot &&
      null !== input.pivot &&
      $io1(input.pivot);
    const $io1 = (input: any): boolean =>
      "number" === typeof input.x &&
      "number" === typeof input.y &&
      "number" === typeof input.z;
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    const $throws = (typia.json.createStringify as any).throws;
    const $sp0 = (input: any) => {
      const array = input;
      const top = input[0];
      if (0 === input.length) return "[]";
      const arrayPredicators = [
        [
          (top: any[]): any => "string" === typeof top,
          (entire: any[]): any =>
            `[${entire.map((elem: any) => $string(elem)).join(",")}]`,
        ] as const,
        [
          (top: any[]): any =>
            null !== top &&
            undefined !== top &&
            ("number" === typeof top ||
              "boolean" === typeof top ||
              (Array.isArray(top) && ($sp0(top) || false))),
          (entire: any[]): any => $sa0(entire),
        ] as const,
        [
          (top: any[]): any =>
            "object" === typeof top && null !== top && $io0(top),
          (entire: any[]): any =>
            `[${entire.map((elem: any) => $so0(elem)).join(",")}]`,
        ] as const,
      ];
      const passed = arrayPredicators.filter((pred: any) => pred[0](top));
      if (1 === passed.length) return passed[0]![1](array);
      else if (1 < passed.length)
        for (const pred of passed)
          if (array.every((value: any) => true === pred[0](value)))
            return pred[1](array);
      $throws({
        expected:
          "(Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>)",
        value: input,
      });
    };
    const $so0 = (input: any): any =>
      `{"scale":${`{"x":${$number((input.scale as any).x)},"y":${$number(
        (input.scale as any).y,
      )},"z":${$number((input.scale as any).z)}}`},"position":${`{"x":${$number(
        (input.position as any).x,
      )},"y":${$number((input.position as any).y)},"z":${$number(
        (input.position as any).z,
      )}}`},"rotate":${`{"x":${$number((input.rotate as any).x)},"y":${$number(
        (input.rotate as any).y,
      )},"z":${$number((input.rotate as any).z)}}`},"pivot":${`{"x":${$number(
        (input.pivot as any).x,
      )},"y":${$number((input.pivot as any).y)},"z":${$number(
        (input.pivot as any).z,
      )}}`}}`;
    const $sa0 = (input: any): any =>
      `[${input
        .map((elem: any) =>
          (() => {
            if ("number" === typeof elem) return $number(elem);
            if ("boolean" === typeof elem) return elem;
            if (Array.isArray(elem)) return $sp0(elem);
            $throws({
              expected:
                "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
              value: elem,
            });
          })(),
        )
        .join(",")}]`;
    return (() => {
      if ("number" === typeof input) return $number(input).toString();
      if ("boolean" === typeof input) return input.toString();
      if (Array.isArray(input)) return $sp0(input);
      $throws({
        expected:
          "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
        value: input,
      });
    })();
  });
