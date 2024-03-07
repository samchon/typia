import typia from "typia";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_assertParseCustom_ObjectGeneric = _test_json_assertParse(
  CustomGuardError,
)("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)((input) =>
  ((
    input: string,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Primitive<ObjectGeneric> => {
    const assert = (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectGeneric => {
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
          const $guard = (typia.json.assertParse as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("boolean" === typeof input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "boolean",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.child && null !== input.child) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child",
                  expected: "ObjectGeneric.IChild<boolean, boolean>",
                  value: input.child,
                },
                errorFactory,
              )) &&
              $ao1(input.child, _path + ".child", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child",
                  expected: "ObjectGeneric.IChild<boolean, boolean>",
                  value: input.child,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.elements) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".elements",
                  expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
                  value: input.elements,
                },
                errorFactory,
              )) &&
              input.elements.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".elements[" + _index1 + "]",
                        expected: "ObjectGeneric.IChild<boolean, boolean>",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao1(
                      elem,
                      _path + ".elements[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".elements[" + _index1 + "]",
                      expected: "ObjectGeneric.IChild<boolean, boolean>",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".elements",
                  expected: "Array<ObjectGeneric.IChild<boolean, boolean>>",
                  value: input.elements,
                },
                errorFactory,
              ));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("boolean" === typeof input.child_value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child_value",
                  expected: "boolean",
                  value: input.child_value,
                },
                errorFactory,
              )) &&
            ("boolean" === typeof input.child_next ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child_next",
                  expected: "boolean",
                  value: input.child_next,
                },
                errorFactory,
              ));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.value &&
              Number.isFinite(input.value)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.child && null !== input.child) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child",
                  expected: "ObjectGeneric.IChild<number, number>",
                  value: input.child,
                },
                errorFactory,
              )) &&
              $ao3(input.child, _path + ".child", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child",
                  expected: "ObjectGeneric.IChild<number, number>",
                  value: input.child,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.elements) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".elements",
                  expected: "Array<ObjectGeneric.IChild<number, number>>",
                  value: input.elements,
                },
                errorFactory,
              )) &&
              input.elements.every(
                (elem: any, _index2: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".elements[" + _index2 + "]",
                        expected: "ObjectGeneric.IChild<number, number>",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao3(
                      elem,
                      _path + ".elements[" + _index2 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".elements[" + _index2 + "]",
                      expected: "ObjectGeneric.IChild<number, number>",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".elements",
                  expected: "Array<ObjectGeneric.IChild<number, number>>",
                  value: input.elements,
                },
                errorFactory,
              ));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.child_value &&
              Number.isFinite(input.child_value)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child_value",
                  expected: "number",
                  value: input.child_value,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.child_next &&
              Number.isFinite(input.child_next)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child_next",
                  expected: "number",
                  value: input.child_next,
                },
                errorFactory,
              ));
          const $ao4 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "string",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.child && null !== input.child) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child",
                  expected: "ObjectGeneric.IChild<string, string>",
                  value: input.child,
                },
                errorFactory,
              )) &&
              $ao5(input.child, _path + ".child", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child",
                  expected: "ObjectGeneric.IChild<string, string>",
                  value: input.child,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.elements) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".elements",
                  expected: "Array<ObjectGeneric.IChild<string, string>>",
                  value: input.elements,
                },
                errorFactory,
              )) &&
              input.elements.every(
                (elem: any, _index3: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".elements[" + _index3 + "]",
                        expected: "ObjectGeneric.IChild<string, string>",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao5(
                      elem,
                      _path + ".elements[" + _index3 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".elements[" + _index3 + "]",
                      expected: "ObjectGeneric.IChild<string, string>",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".elements",
                  expected: "Array<ObjectGeneric.IChild<string, string>>",
                  value: input.elements,
                },
                errorFactory,
              ));
          const $ao5 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.child_value ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child_value",
                  expected: "string",
                  value: input.child_value,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.child_next ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".child_next",
                  expected: "string",
                  value: input.child_next,
                },
                errorFactory,
              ));
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectGeneric",
                  value: input,
                },
                errorFactory,
              )) &&
              (input.length === 3 ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected:
                      "[ObjectGeneric.ISomething<boolean>, ObjectGeneric.ISomething<number>, ObjectGeneric.ISomething<string>]",
                    value: input,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input[0] && null !== input[0]) ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "ObjectGeneric.ISomething<boolean>",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
                $ao0(input[0], _path + "[0]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[0]",
                    expected: "ObjectGeneric.ISomething<boolean>",
                    value: input[0],
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input[1] && null !== input[1]) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "ObjectGeneric.ISomething<number>",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
                $ao2(input[1], _path + "[1]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[1]",
                    expected: "ObjectGeneric.ISomething<number>",
                    value: input[1],
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input[2] && null !== input[2]) ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "ObjectGeneric.ISomething<string>",
                    value: input[2],
                  },
                  errorFactory,
                )) &&
                $ao4(input[2], _path + "[2]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[2]",
                    expected: "ObjectGeneric.ISomething<string>",
                    value: input[2],
                  },
                  errorFactory,
                ))) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectGeneric",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    };
    input = JSON.parse(input);
    return assert(input, errorFactory) as any;
  })(input, (p) => new CustomGuardError(p)),
);
