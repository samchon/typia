import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_createAssertGuardCustom_ObjectUnionDouble = _test_assertGuard(
  CustomGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): asserts input is ObjectUnionDouble => {
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
          if ($io0(input)) return $io0(input);
          return false;
        })();
      const $iu1 = (input: any): any =>
        (() => {
          if ($io4(input)) return $io4(input);
          if ($io2(input)) return $io2(input);
          return false;
        })();
      const $iu2 = (input: any): any =>
        (() => {
          if ($io10(input)) return $io10(input);
          if ($io8(input)) return $io8(input);
          return false;
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
        const $guard = (typia.createAssertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao1(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type",
                value: input.value,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".child",
                expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                value: input.child,
              },
              errorFactory,
            )) &&
            $au1(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".child",
                expected: "(ObjectUnionDouble.IAA | ObjectUnionDouble.IAB)",
                value: input.child,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.x && Number.isFinite(input.x)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".x",
              expected: "number",
              value: input.x,
            },
            errorFactory,
          );
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type.o1",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao3(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "__type.o1",
              value: input.value,
            },
            errorFactory,
          );
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "boolean" === typeof input.y ||
          $guard(
            _exceptionable,
            {
              path: _path + ".y",
              expected: "boolean",
              value: input.y,
            },
            errorFactory,
          );
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type.o2",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao5(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "__type.o2",
              value: input.value,
            },
            errorFactory,
          );
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.y && Number.isFinite(input.y)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".y",
              expected: "number",
              value: input.y,
            },
            errorFactory,
          );
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type.o3",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao7(input.value, _path + ".value", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type.o3",
                value: input.value,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.child && null !== input.child) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".child",
                expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                value: input.child,
              },
              errorFactory,
            )) &&
            $au2(input.child, _path + ".child", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".child",
                expected: "(ObjectUnionDouble.IBA | ObjectUnionDouble.IBB)",
                value: input.child,
              },
              errorFactory,
            ));
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.x ||
          $guard(
            _exceptionable,
            {
              path: _path + ".x",
              expected: "string",
              value: input.x,
            },
            errorFactory,
          );
        const $ao8 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type.o4",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao9(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "__type.o4",
              value: input.value,
            },
            errorFactory,
          );
        const $ao9 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          "string" === typeof input.y ||
          $guard(
            _exceptionable,
            {
              path: _path + ".y",
              expected: "string",
              value: input.y,
            },
            errorFactory,
          );
        const $ao10 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((("object" === typeof input.value && null !== input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "__type.o5",
                value: input.value,
              },
              errorFactory,
            )) &&
            $ao11(input.value, _path + ".value", true && _exceptionable)) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "__type.o5",
              value: input.value,
            },
            errorFactory,
          );
        const $ao11 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.y) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".y",
                expected: "Array<number>",
                value: input.y,
              },
              errorFactory,
            )) &&
            input.y.every(
              (elem: any, _index2: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".y[" + _index2 + "]",
                    expected: "number",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".y",
              expected: "Array<number>",
              value: input.y,
            },
            errorFactory,
          );
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao6(input, _path, false && _exceptionable) ||
          $ao0(input, _path, false && _exceptionable) ||
          $guard(
            _exceptionable,
            {
              path: _path,
              expected: "(ObjectUnionDouble.IB | ObjectUnionDouble.IA)",
              value: input,
            },
            errorFactory,
          );
        const $au1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao4(input, _path, false && _exceptionable) ||
          $ao2(input, _path, false && _exceptionable) ||
          $guard(
            _exceptionable,
            {
              path: _path,
              expected: "(ObjectUnionDouble.IAB | ObjectUnionDouble.IAA)",
              value: input,
            },
            errorFactory,
          );
        const $au2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          $ao10(input, _path, false && _exceptionable) ||
          $ao8(input, _path, false && _exceptionable) ||
          $guard(
            _exceptionable,
            {
              path: _path,
              expected: "(ObjectUnionDouble.IBB | ObjectUnionDouble.IBA)",
              value: input,
            },
            errorFactory,
          );
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectUnionDouble",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "(ObjectUnionDouble.IA | ObjectUnionDouble.IB)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectUnionDouble",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);
