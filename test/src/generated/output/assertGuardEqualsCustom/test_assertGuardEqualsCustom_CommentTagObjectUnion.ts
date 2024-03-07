import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_assertGuardEqualsCustom_CommentTagObjectUnion =
  _test_assertGuardEquals(CustomGuardError)(
    "CommentTagObjectUnion",
  )<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is CommentTagObjectUnion => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is CommentTagObjectUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.value &&
          Number.isFinite(input.value) &&
          3 <= input.value &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7 &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
          (() => {
            if (
              "string" === typeof input.value &&
              3 <= input.value.length &&
              input.value.length <= 7
            )
              return $io1(input, true && _exceptionable);
            else if (
              "number" === typeof input.value &&
              Number.isFinite(input.value) &&
              3 <= input.value
            )
              return $io0(input, true && _exceptionable);
            else return false;
          })();
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              "object" === typeof elem && null !== elem && $iu0(elem, true),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagObjectUnion => {
          const $guard = (typia.assertGuardEquals as any).guard;
          const $join = (typia.assertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.value &&
              (Number.isFinite(input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "number",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
              (3 <= input.value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "number & Minimum<3>",
                    value: input.value,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "(number & Minimum<3>)",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("string" === typeof input.value &&
              (3 <= input.value.length ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "string & MinLength<3>",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
              (input.value.length <= 7 ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "string & MaxLength<7>",
                    value: input.value,
                  },
                  errorFactory,
                ))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "(string & MinLength<3> & MaxLength<7>)",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $au0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            (() => {
              if (
                "string" === typeof input.value &&
                (3 <= input.value.length ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "string & MinLength<3>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (input.value.length <= 7 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "string & MaxLength<7>",
                      value: input.value,
                    },
                    errorFactory,
                  ))
              )
                return $ao1(input, _path, true && _exceptionable);
              else if (
                "number" === typeof input.value &&
                (3 <= input.value ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "number & Minimum<3>",
                      value: input.value,
                    },
                    errorFactory,
                  ))
              )
                return $ao0(input, _path, true && _exceptionable);
              else
                return $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                    value: input,
                  },
                  errorFactory,
                );
            })();
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "CommentTagObjectUnion",
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
                        expected:
                          "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $au0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(CommentTagObjectUnion.Literal | CommentTagObjectUnion.Numeric)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "CommentTagObjectUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    })(input, (p) => new CustomGuardError(p)),
  );
