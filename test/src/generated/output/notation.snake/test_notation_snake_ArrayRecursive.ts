import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_notation_validateSnake_ArrayRecursive =
  _test_notation_validateGeneral("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )<typia.SnakeCase<ArrayRecursive>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ArrayRecursive>> => {
        const validate = (input: any): typia.IValidation<ArrayRecursive> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArrayRecursive => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.children) &&
              input.children.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              ) &&
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "number" === typeof input.sequence &&
              Number.isFinite(input.sequence) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              "number" === typeof (input.created_at as any).time &&
              Number.isFinite((input.created_at as any).time) &&
              "number" === typeof (input.created_at as any).zone &&
              Number.isFinite((input.created_at as any).zone);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRecursive => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.children) ||
                    $report(_exceptionable, {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursive.ICategory>",
                      value: input.children,
                    })) &&
                    input.children
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".children[" + _index1 + "]",
                              expected: "ArrayRecursive.ICategory",
                              value: elem,
                            })) &&
                            $vo0(
                              elem,
                              _path + ".children[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".children[" + _index1 + "]",
                            expected: "ArrayRecursive.ICategory",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursive.ICategory>",
                      value: input.children,
                    }),
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    }),
                  "string" === typeof input.code ||
                    $report(_exceptionable, {
                      path: _path + ".code",
                      expected: "string",
                      value: input.code,
                    }),
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                    $report(_exceptionable, {
                      path: _path + ".sequence",
                      expected: "number",
                      value: input.sequence,
                    }),
                  ((("object" === typeof input.created_at &&
                    null !== input.created_at) ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "ArrayRecursive.ITimestamp",
                      value: input.created_at,
                    })) &&
                    $vo1(
                      input.created_at,
                      _path + ".created_at",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "ArrayRecursive.ITimestamp",
                      value: input.created_at,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.time &&
                    Number.isFinite(input.time)) ||
                    $report(_exceptionable, {
                      path: _path + ".time",
                      expected: "number",
                      value: input.time,
                    }),
                  ("number" === typeof input.zone &&
                    Number.isFinite(input.zone)) ||
                    $report(_exceptionable, {
                      path: _path + ".zone",
                      expected: "number",
                      value: input.zone,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayRecursive.ICategory",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayRecursive.ICategory",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        };
        const general = (
          input: ArrayRecursive,
        ): typia.SnakeCase<ArrayRecursive> => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.children) &&
            input.children.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            "number" === typeof input.id &&
            "string" === typeof input.code &&
            "number" === typeof input.sequence &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            $io1(input.created_at);
          const $io1 = (input: any): boolean =>
            "number" === typeof input.time && "number" === typeof input.zone;
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co0(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            children: Array.isArray(input.children)
              ? $cp0(input.children)
              : (input.children as any),
            id: input.id as any,
            code: input.code as any,
            sequence: input.sequence as any,
            created_at:
              "object" === typeof input.created_at && null !== input.created_at
                ? $co1(input.created_at)
                : (input.created_at as any),
          });
          const $co1 = (input: any): any => ({
            time: input.time as any,
            zone: input.zone as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<ArrayRecursive> => {
      const __is = (input: any): input is typia.SnakeCase<ArrayRecursive> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.code &&
          "number" === typeof input.sequence &&
          Number.isFinite(input.sequence) &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          "number" === typeof (input.created_at as any).time &&
          Number.isFinite((input.created_at as any).time) &&
          "number" === typeof (input.created_at as any).zone &&
          Number.isFinite((input.created_at as any).zone);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArrayRecursive> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.children) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".children",
                  expected: "Array<ArrayRecursive.ICategory>",
                  value: input.children,
                },
                errorFactory,
              )) &&
              input.children.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".children[" + _index1 + "]",
                        expected: "ArrayRecursive.ICategory",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao0(
                      elem,
                      _path + ".children[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children[" + _index1 + "]",
                      expected: "ArrayRecursive.ICategory",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".children",
                  expected: "Array<ArrayRecursive.ICategory>",
                  value: input.children,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "number",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.code ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".code",
                  expected: "string",
                  value: input.code,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.sequence &&
              Number.isFinite(input.sequence)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".sequence",
                  expected: "number",
                  value: input.sequence,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "ArrayRecursive.ITimestamp",
                  value: input.created_at,
                },
                errorFactory,
              )) &&
              $ao1(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "ArrayRecursive.ITimestamp",
                  value: input.created_at,
                },
                errorFactory,
              ));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.time && Number.isFinite(input.time)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".time",
                  expected: "number",
                  value: input.time,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.zone && Number.isFinite(input.zone)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".zone",
                  expected: "number",
                  value: input.zone,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayRecursive.ICategory",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArrayRecursive.ICategory",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
