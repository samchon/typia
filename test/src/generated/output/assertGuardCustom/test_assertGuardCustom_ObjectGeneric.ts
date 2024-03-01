import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_assertGuardCustom_ObjectGeneric = _test_assertGuard(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)((input) =>
  ((
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): asserts input is ObjectGeneric => {
    const $guard = (typia.assertGuard as any).guard(errorFactory);
    const __is = (input: any): input is ObjectGeneric => {
      const $io0 = (input: any): boolean =>
        "boolean" === typeof input.value &&
        "object" === typeof input.child &&
        null !== input.child &&
        "boolean" === typeof (input.child as any).child_value &&
        "boolean" === typeof (input.child as any).child_next &&
        Array.isArray(input.elements) &&
        input.elements.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "boolean" === typeof input.child_value &&
        "boolean" === typeof input.child_next;
      const $io2 = (input: any): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        "object" === typeof input.child &&
        null !== input.child &&
        "number" === typeof (input.child as any).child_value &&
        Number.isFinite((input.child as any).child_value) &&
        "number" === typeof (input.child as any).child_next &&
        Number.isFinite((input.child as any).child_next) &&
        Array.isArray(input.elements) &&
        input.elements.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io3(elem),
        );
      const $io3 = (input: any): boolean =>
        "number" === typeof input.child_value &&
        Number.isFinite(input.child_value) &&
        "number" === typeof input.child_next &&
        Number.isFinite(input.child_next);
      const $io4 = (input: any): boolean =>
        "string" === typeof input.value &&
        "object" === typeof input.child &&
        null !== input.child &&
        "string" === typeof (input.child as any).child_value &&
        "string" === typeof (input.child as any).child_next &&
        Array.isArray(input.elements) &&
        input.elements.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io5(elem),
        );
      const $io5 = (input: any): boolean =>
        "string" === typeof input.child_value &&
        "string" === typeof input.child_next;
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "object" === typeof input[0] &&
        null !== input[0] &&
        $io0(input[0]) &&
        "object" === typeof input[1] &&
        null !== input[1] &&
        $io2(input[1]) &&
        "object" === typeof input[2] &&
        null !== input[2] &&
        $io4(input[2])
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectGeneric => {
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "boolean",
              value: input.value,
            })) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "ObjectGeneric.IChild<boolean, boolean>",
              value: input.child,
            })) &&
            $ao1(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "ObjectGeneric.IChild<boolean, boolean>",
              value: input.child,
            })) &&
          (((Array.isArray(input.elements) ||
            $guard(_exceptionable, {
              path: _path + ".elements",
              expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
              value: input.elements,
            })) &&
            input.elements.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".elements[" + _index1 + "]",
                    expected: "ObjectGeneric.IChild<boolean, boolean>",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".elements[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".elements[" + _index1 + "]",
                  expected: "ObjectGeneric.IChild<boolean, boolean>",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".elements",
              expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
              value: input.elements,
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.child_value ||
            $guard(_exceptionable, {
              path: _path + ".child_value",
              expected: "boolean",
              value: input.child_value,
            })) &&
          ("boolean" === typeof input.child_next ||
            $guard(_exceptionable, {
              path: _path + ".child_next",
              expected: "boolean",
              value: input.child_next,
            }));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.value && Number.isFinite(input.value)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            })) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "ObjectGeneric.IChild<number, number>",
              value: input.child,
            })) &&
            $ao3(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "ObjectGeneric.IChild<number, number>",
              value: input.child,
            })) &&
          (((Array.isArray(input.elements) ||
            $guard(_exceptionable, {
              path: _path + ".elements",
              expected: "Array<ObjectGeneric.IChild<number, number>>",
              value: input.elements,
            })) &&
            input.elements.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".elements[" + _index2 + "]",
                    expected: "ObjectGeneric.IChild<number, number>",
                    value: elem,
                  })) &&
                  $ao3(
                    elem,
                    _path + ".elements[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".elements[" + _index2 + "]",
                  expected: "ObjectGeneric.IChild<number, number>",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".elements",
              expected: "Array<ObjectGeneric.IChild<number, number>>",
              value: input.elements,
            }));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.child_value &&
            Number.isFinite(input.child_value)) ||
            $guard(_exceptionable, {
              path: _path + ".child_value",
              expected: "number",
              value: input.child_value,
            })) &&
          (("number" === typeof input.child_next &&
            Number.isFinite(input.child_next)) ||
            $guard(_exceptionable, {
              path: _path + ".child_next",
              expected: "number",
              value: input.child_next,
            }));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "string",
              value: input.value,
            })) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "ObjectGeneric.IChild<string, string>",
              value: input.child,
            })) &&
            $ao5(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".child",
              expected: "ObjectGeneric.IChild<string, string>",
              value: input.child,
            })) &&
          (((Array.isArray(input.elements) ||
            $guard(_exceptionable, {
              path: _path + ".elements",
              expected: "Array<ObjectGeneric.IChild<string, string>>",
              value: input.elements,
            })) &&
            input.elements.every(
              (elem: any, _index3: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".elements[" + _index3 + "]",
                    expected: "ObjectGeneric.IChild<string, string>",
                    value: elem,
                  })) &&
                  $ao5(
                    elem,
                    _path + ".elements[" + _index3 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".elements[" + _index3 + "]",
                  expected: "ObjectGeneric.IChild<string, string>",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".elements",
              expected: "Array<ObjectGeneric.IChild<string, string>>",
              value: input.elements,
            }));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.child_value ||
            $guard(_exceptionable, {
              path: _path + ".child_value",
              expected: "string",
              value: input.child_value,
            })) &&
          ("string" === typeof input.child_next ||
            $guard(_exceptionable, {
              path: _path + ".child_next",
              expected: "string",
              value: input.child_next,
            }));
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectGeneric",
              value: input,
            })) &&
            (input.length === 3 ||
              $guard(true, {
                path: _path + "",
                expected:
                  "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                value: input,
              })) &&
            (((("object" === typeof input[0] && null !== input[0]) ||
              $guard(true, {
                path: _path + "[0]",
                expected: "ObjectGeneric.ISomething<boolean>",
                value: input[0],
              })) &&
              $ao0(input[0], _path + "[0]", true)) ||
              $guard(true, {
                path: _path + "[0]",
                expected: "ObjectGeneric.ISomething<boolean>",
                value: input[0],
              })) &&
            (((("object" === typeof input[1] && null !== input[1]) ||
              $guard(true, {
                path: _path + "[1]",
                expected: "ObjectGeneric.ISomething<number>",
                value: input[1],
              })) &&
              $ao2(input[1], _path + "[1]", true)) ||
              $guard(true, {
                path: _path + "[1]",
                expected: "ObjectGeneric.ISomething<number>",
                value: input[1],
              })) &&
            (((("object" === typeof input[2] && null !== input[2]) ||
              $guard(true, {
                path: _path + "[2]",
                expected: "ObjectGeneric.ISomething<string>",
                value: input[2],
              })) &&
              $ao4(input[2], _path + "[2]", true)) ||
              $guard(true, {
                path: _path + "[2]",
                expected: "ObjectGeneric.ISomething<string>",
                value: input[2],
              }))) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectGeneric",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input, (p) => new CustomGuardError(p)),
);
