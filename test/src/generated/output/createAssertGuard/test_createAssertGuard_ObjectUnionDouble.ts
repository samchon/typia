import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createAssertGuard_ObjectUnionDouble = _test_assertGuard(
  "ObjectUnionDouble",
)<ObjectUnionDouble>(ObjectUnionDouble)(
  (input: any): asserts input is ObjectUnionDouble => {
    const __is = (input: any): input is ObjectUnionDouble => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectUnionDouble => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssertGuard",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type",
              value: input.value,
            })) &&
            $ao1(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type",
              value: input.value,
            })) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
              value: input.child,
            })) &&
            $au1(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
              value: input.child,
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.x && Number.isFinite(input.x)) ||
          $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x,
          });
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type.o1",
              value: input.value,
            })) &&
            $ao3(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type.o1",
            value: input.value,
          });
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "boolean" === typeof input.y ||
          $guard(_exceptionable, {
            path: _path + ".y",
            expected: "boolean",
            value: input.y,
          });
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type.o2",
              value: input.value,
            })) &&
            $ao5(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type.o2",
            value: input.value,
          });
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.y && Number.isFinite(input.y)) ||
          $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y,
          });
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type.o3",
              value: input.value,
            })) &&
            $ao7(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type.o3",
              value: input.value,
            })) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
              value: input.child,
            })) &&
            $au2(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
              value: input.child,
            }));
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.x ||
          $guard(_exceptionable, {
            path: _path + ".x",
            expected: "string",
            value: input.x,
          });
        const $ao8 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type.o4",
              value: input.value,
            })) &&
            $ao9(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type.o4",
            value: input.value,
          });
        const $ao9 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.y ||
          $guard(_exceptionable, {
            path: _path + ".y",
            expected: "string",
            value: input.y,
          });
        const $ao10 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "__type.o5",
              value: input.value,
            })) &&
            $ao11(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "__type.o5",
            value: input.value,
          });
        const $ao11 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.y) ||
            $guard(_exceptionable, {
              path: _path + ".y",
              expected: "Array<number>",
              value: input.y,
            })) &&
            input.y.every(
              (elem: any, _index2: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(_exceptionable, {
                  path: _path + ".y[" + _index2 + "]",
                  expected: "number",
                  value: elem,
                }),
            )) ||
          $guard(_exceptionable, {
            path: _path + ".y",
            expected: "Array<number>",
            value: input.y,
          });
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao6(input, _path, false && _exceptionable) ||
          $ao0(input, _path, false && _exceptionable) ||
          $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
            value: input,
          });
        const $au1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao4(input, _path, false && _exceptionable) ||
          $ao2(input, _path, false && _exceptionable) ||
          $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
            value: input,
          });
        const $au2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao10(input, _path, false && _exceptionable) ||
          $ao8(input, _path, false && _exceptionable) ||
          $guard(_exceptionable, {
            path: _path,
            expected: "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
            value: input,
          });
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectUnionDouble",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                    value: elem,
                  })) &&
                  $au0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectUnionDouble",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
