import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_misc_assertClone_ArrayRepeatedUnion = _test_misc_assertClone(
  "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
  ((input: any): typia.Resolved<ArrayRepeatedUnion> => {
    const assert = (input: any): ArrayRepeatedUnion => {
      const __is = (input: any): input is ArrayRepeatedUnion => {
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
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ArrayRepeatedUnion => {
          const $guard = (typia.misc.assertClone as any).guard;
          const $ap0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ) => {
            const array = input;
            const top = input[0];
            if (0 === input.length) return true;
            const arrayPredicators = [
              [
                (top: any[]): any => "string" === typeof top,
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index1 + "]",
                        expected: "string",
                        value: elem,
                      }),
                  ),
              ] as const,
              [
                (top: any[]): any =>
                  null !== top &&
                  undefined !== top &&
                  (("number" === typeof top && Number.isFinite(top)) ||
                    "boolean" === typeof top ||
                    (Array.isArray(top) &&
                      ($ap0(top, _path, false && _exceptionable) ||
                        $guard(_exceptionable, {
                          path: _path,
                          expected:
                            "Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>",
                          value: top,
                        })))),
                (entire: any[]): any =>
                  $aa0(entire, _path, true && _exceptionable) ||
                  $guard(_exceptionable, {
                    path: _path,
                    expected: "Array<ArrayRepeatedUnion>",
                    value: entire,
                  }),
              ] as const,
              [
                (top: any[]): any =>
                  "object" === typeof top &&
                  null !== top &&
                  $ao0(top, _path, false && _exceptionable),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(_exceptionable, {
                          path: _path + "[" + _index2 + "]",
                          expected: "ArrayRepeatedUnion.IBox3D",
                          value: elem,
                        })) &&
                        $ao0(
                          elem,
                          _path + "[" + _index2 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index2 + "]",
                        expected: "ArrayRepeatedUnion.IBox3D",
                        value: elem,
                      }),
                  ),
              ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length) return passed[0]![1](array);
            else if (1 < passed.length)
              for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                  return pred[1](array);
            return $guard(_exceptionable, {
              path: _path,
              expected:
                "(Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>)",
              value: input,
            });
          };
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.scale && null !== input.scale) ||
              $guard(_exceptionable, {
                path: _path + ".scale",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.scale,
              })) &&
              $ao1(input.scale, _path + ".scale", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".scale",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.scale,
              })) &&
            (((("object" === typeof input.position &&
              null !== input.position) ||
              $guard(_exceptionable, {
                path: _path + ".position",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.position,
              })) &&
              $ao1(
                input.position,
                _path + ".position",
                true && _exceptionable,
              )) ||
              $guard(_exceptionable, {
                path: _path + ".position",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.position,
              })) &&
            (((("object" === typeof input.rotate && null !== input.rotate) ||
              $guard(_exceptionable, {
                path: _path + ".rotate",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.rotate,
              })) &&
              $ao1(input.rotate, _path + ".rotate", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".rotate",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.rotate,
              })) &&
            (((("object" === typeof input.pivot && null !== input.pivot) ||
              $guard(_exceptionable, {
                path: _path + ".pivot",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.pivot,
              })) &&
              $ao1(input.pivot, _path + ".pivot", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".pivot",
                expected: "ArrayRepeatedUnion.IPoint3D",
                value: input.pivot,
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.x && Number.isFinite(input.x)) ||
              $guard(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x,
              })) &&
            (("number" === typeof input.y && Number.isFinite(input.y)) ||
              $guard(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y,
              })) &&
            (("number" === typeof input.z && Number.isFinite(input.z)) ||
              $guard(_exceptionable, {
                path: _path + ".z",
                expected: "number",
                value: input.z,
              }));
          const $aa0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            input.every(
              (elem: any, _index3: number) =>
                (null !== elem ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index3 + "]",
                    expected:
                      "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                    value: elem,
                  })) &&
                (undefined !== elem ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index3 + "]",
                    expected:
                      "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                    value: elem,
                  })) &&
                (("number" === typeof elem && Number.isFinite(elem)) ||
                  "boolean" === typeof elem ||
                  ((Array.isArray(elem) ||
                    $guard(_exceptionable, {
                      path: _path + "[" + _index3 + "]",
                      expected:
                        "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                      value: elem,
                    })) &&
                    ($ap0(
                      elem,
                      _path + "[" + _index3 + "]",
                      true && _exceptionable,
                    ) ||
                      $guard(_exceptionable, {
                        path: _path + "[" + _index3 + "]",
                        expected:
                          "Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>",
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + "[" + _index3 + "]",
                    expected:
                      "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                    value: elem,
                  })),
            );
          return (
            (null !== input ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                value: input,
              })) &&
            (undefined !== input ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                value: input,
              })) &&
            (("number" === typeof input && Number.isFinite(input)) ||
              "boolean" === typeof input ||
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected:
                    "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                  value: input,
                })) &&
                ($ap0(input, _path + "", true && _exceptionable) ||
                  $guard(_exceptionable, {
                    path: _path + "",
                    expected:
                      "Array<string> | Array<ArrayRepeatedUnion> | Array<ArrayRepeatedUnion.IBox3D>",
                    value: input,
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected:
                  "(Array<ArrayRepeatedUnion.IBox3D> | Array<ArrayRepeatedUnion> | Array<string> | boolean | number)",
                value: input,
              }))
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (
      input: ArrayRepeatedUnion,
    ): typia.Resolved<ArrayRepeatedUnion> => {
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
      const $throws = (typia.misc.assertClone as any).throws;
      const $cp0 = (input: any) => {
        const array = input;
        const top = input[0];
        if (0 === input.length) return [];
        const arrayPredicators = [
          [
            (top: any[]): any => "string" === typeof top,
            (entire: any[]): any => entire.map((elem: any) => elem as any),
          ] as const,
          [
            (top: any[]): any =>
              null !== top &&
              undefined !== top &&
              ("number" === typeof top ||
                "boolean" === typeof top ||
                (Array.isArray(top) && ($cp0(top) || false))),
            (entire: any[]): any => $ca0(entire),
          ] as const,
          [
            (top: any[]): any =>
              "object" === typeof top && null !== top && $io0(top),
            (entire: any[]): any =>
              entire.map((elem: any) =>
                "object" === typeof elem && null !== elem
                  ? $co0(elem)
                  : (elem as any),
              ),
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
      const $co0 = (input: any): any => ({
        scale:
          "object" === typeof input.scale && null !== input.scale
            ? $co1(input.scale)
            : (input.scale as any),
        position:
          "object" === typeof input.position && null !== input.position
            ? $co1(input.position)
            : (input.position as any),
        rotate:
          "object" === typeof input.rotate && null !== input.rotate
            ? $co1(input.rotate)
            : (input.rotate as any),
        pivot:
          "object" === typeof input.pivot && null !== input.pivot
            ? $co1(input.pivot)
            : (input.pivot as any),
      });
      const $co1 = (input: any): any => ({
        x: input.x as any,
        y: input.y as any,
        z: input.z as any,
      });
      const $ca0 = (input: any): any =>
        input.map((elem: any) =>
          Array.isArray(elem) ? $cp0(elem) : (elem as any),
        );
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
