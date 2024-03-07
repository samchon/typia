import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArraySimple } from "../../../structures/ArraySimple";
export const test_notation_validateSnake_ArraySimple =
  _test_notation_validateGeneral("ArraySimple")<ArraySimple>(ArraySimple)<
    typia.SnakeCase<ArraySimple>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ArraySimple>> => {
        const validate = (input: any): typia.IValidation<ArraySimple> => {
          const errors = [] as any[];
          const __is = (input: any): input is ArraySimple => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.name &&
              "string" === typeof input.email &&
              Array.isArray(input.hobbies) &&
              input.hobbies.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "string" === typeof input.name &&
              "string" === typeof input.body &&
              "number" === typeof input.rank &&
              Number.isFinite(input.rank);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArraySimple => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  "string" === typeof input.email ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "string",
                      value: input.email,
                    }),
                  ((Array.isArray(input.hobbies) ||
                    $report(_exceptionable, {
                      path: _path + ".hobbies",
                      expected: "Array<ArraySimple.IHobby>",
                      value: input.hobbies,
                    })) &&
                    input.hobbies
                      .map(
                        (elem: any, _index2: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".hobbies[" + _index2 + "]",
                              expected: "ArraySimple.IHobby",
                              value: elem,
                            })) &&
                            $vo1(
                              elem,
                              _path + ".hobbies[" + _index2 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".hobbies[" + _index2 + "]",
                            expected: "ArraySimple.IHobby",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".hobbies",
                      expected: "Array<ArraySimple.IHobby>",
                      value: input.hobbies,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  "string" === typeof input.body ||
                    $report(_exceptionable, {
                      path: _path + ".body",
                      expected: "string",
                      value: input.body,
                    }),
                  ("number" === typeof input.rank &&
                    Number.isFinite(input.rank)) ||
                    $report(_exceptionable, {
                      path: _path + ".rank",
                      expected: "number",
                      value: input.rank,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArraySimple",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "ArraySimple.IPerson",
                            value: elem,
                          })) &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "ArraySimple.IPerson",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArraySimple",
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
        const general = (input: ArraySimple): typia.SnakeCase<ArraySimple> => {
          const $io1 = (input: any): boolean =>
            "string" === typeof input.name &&
            "string" === typeof input.body &&
            "number" === typeof input.rank;
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co0(elem)
                : (elem as any),
            );
          const $cp1 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co1(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            name: input.name as any,
            email: input.email as any,
            hobbies: Array.isArray(input.hobbies)
              ? $cp1(input.hobbies)
              : (input.hobbies as any),
          });
          const $co1 = (input: any): any => ({
            name: input.name as any,
            body: input.body as any,
            rank: input.rank as any,
          });
          return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<ArraySimple> => {
      const __is = (input: any): input is typia.SnakeCase<ArraySimple> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.name &&
          "string" === typeof input.email &&
          Array.isArray(input.hobbies) &&
          input.hobbies.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "string" === typeof input.name &&
          "string" === typeof input.body &&
          "number" === typeof input.rank &&
          Number.isFinite(input.rank);
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ArraySimple> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.email ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".email",
                  expected: "string",
                  value: input.email,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.hobbies) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".hobbies",
                  expected: "Array<ArraySimple.IHobby>",
                  value: input.hobbies,
                },
                errorFactory,
              )) &&
              input.hobbies.every(
                (elem: any, _index2: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".hobbies[" + _index2 + "]",
                        expected: "ArraySimple.IHobby",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao1(
                      elem,
                      _path + ".hobbies[" + _index2 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".hobbies[" + _index2 + "]",
                      expected: "ArraySimple.IHobby",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".hobbies",
                  expected: "Array<ArraySimple.IHobby>",
                  value: input.hobbies,
                },
                errorFactory,
              ));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.body ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".body",
                  expected: "string",
                  value: input.body,
                },
                errorFactory,
              )) &&
            (("number" === typeof input.rank && Number.isFinite(input.rank)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".rank",
                  expected: "number",
                  value: input.rank,
                },
                errorFactory,
              ));
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArraySimple",
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
                        expected: "ArraySimple.IPerson",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "ArraySimple.IPerson",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ArraySimple",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
