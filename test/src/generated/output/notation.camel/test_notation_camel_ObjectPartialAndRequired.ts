import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
export const test_notation_validateCamel_ObjectPartialAndRequired =
  _test_notation_validateGeneral(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
    typia.CamelCase<ObjectPartialAndRequired>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.CamelCase<ObjectPartialAndRequired>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectPartialAndRequired> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectPartialAndRequired => {
            const $io0 = (input: any): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (null === input.object ||
                ("object" === typeof input.object &&
                  null !== input.object &&
                  $io0(input.object))) &&
              Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectPartialAndRequired => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  undefined === input.string ||
                    "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    }),
                  undefined === input.number ||
                    ("number" === typeof input.number &&
                      Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "(number | undefined)",
                      value: input.number,
                    }),
                  undefined === input.boolean ||
                    "boolean" === typeof input.boolean ||
                    $report(_exceptionable, {
                      path: _path + ".boolean",
                      expected: "(boolean | undefined)",
                      value: input.boolean,
                    }),
                  null === input.object ||
                    ((("object" === typeof input.object &&
                      null !== input.object) ||
                      $report(_exceptionable, {
                        path: _path + ".object",
                        expected: "(ObjectPartialAndRequired | null)",
                        value: input.object,
                      })) &&
                      $vo0(
                        input.object,
                        _path + ".object",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".object",
                      expected: "(ObjectPartialAndRequired | null)",
                      value: input.object,
                    }),
                  ((Array.isArray(input.array) ||
                    $report(_exceptionable, {
                      path: _path + ".array",
                      expected: "Array<number>",
                      value: input.array,
                    })) &&
                    input.array
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + ".array[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".array",
                      expected: "Array<number>",
                      value: input.array,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectPartialAndRequired",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectPartialAndRequired",
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
          input: ObjectPartialAndRequired,
        ): typia.CamelCase<ObjectPartialAndRequired> => {
          const $io0 = (input: any): boolean =>
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.number || "number" === typeof input.number) &&
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (null === input.object ||
              ("object" === typeof input.object &&
                null !== input.object &&
                $io0(input.object))) &&
            Array.isArray(input.array) &&
            input.array.every((elem: any) => "number" === typeof elem);
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            string: input.string as any,
            number: input.number as any,
            boolean: input.boolean as any,
            object:
              "object" === typeof input.object && null !== input.object
                ? $co0(input.object)
                : (input.object as any),
            array: Array.isArray(input.array)
              ? $cp0(input.array)
              : (input.array as any),
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
    ): typia.CamelCase<ObjectPartialAndRequired> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectPartialAndRequired> => {
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectPartialAndRequired> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (undefined === input.string ||
              "string" === typeof input.string ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".string",
                  expected: "(string | undefined)",
                  value: input.string,
                },
                errorFactory,
              )) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".number",
                  expected: "(number | undefined)",
                  value: input.number,
                },
                errorFactory,
              )) &&
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".boolean",
                  expected: "(boolean | undefined)",
                  value: input.boolean,
                },
                errorFactory,
              )) &&
            (null === input.object ||
              ((("object" === typeof input.object && null !== input.object) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".object",
                    expected: "(ObjectPartialAndRequired | null)",
                    value: input.object,
                  },
                  errorFactory,
                )) &&
                $ao0(
                  input.object,
                  _path + ".object",
                  true && _exceptionable,
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".object",
                  expected: "(ObjectPartialAndRequired | null)",
                  value: input.object,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.array) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                },
                errorFactory,
              )) &&
              input.array.every(
                (elem: any, _index1: number) =>
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".array[" + _index1 + "]",
                      expected: "number",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".array",
                  expected: "Array<number>",
                  value: input.array,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectPartialAndRequired",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectPartialAndRequired",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
