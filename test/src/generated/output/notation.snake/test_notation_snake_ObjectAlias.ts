import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectAlias } from "../../../structures/ObjectAlias";
export const test_notation_validateSnake_ObjectAlias =
  _test_notation_validateGeneral("ObjectAlias")<ObjectAlias>(ObjectAlias)<
    typia.SnakeCase<ObjectAlias>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectAlias>> => {
        const validate = (input: any): typia.IValidation<ObjectAlias> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectAlias => {
            const $io0 = (input: any): boolean =>
              (null === input.id || "string" === typeof input.id) &&
              "string" === typeof input.email &&
              "string" === typeof input.name &&
              (null === input.sex ||
                2 === input.sex ||
                1 === input.sex ||
                "male" === input.sex ||
                "female" === input.sex) &&
              (null === input.age ||
                ("number" === typeof input.age &&
                  Number.isFinite(input.age))) &&
              (null === input.dead || "boolean" === typeof input.dead);
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
            ): input is ObjectAlias => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  null === input.id ||
                    "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "(null | string)",
                      value: input.id,
                    }),
                  "string" === typeof input.email ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "string",
                      value: input.email,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  null === input.sex ||
                    2 === input.sex ||
                    1 === input.sex ||
                    "male" === input.sex ||
                    "female" === input.sex ||
                    $report(_exceptionable, {
                      path: _path + ".sex",
                      expected: '("female" | "male" | 1 | 2 | null)',
                      value: input.sex,
                    }),
                  null === input.age ||
                    ("number" === typeof input.age &&
                      Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "(null | number)",
                      value: input.age,
                    }),
                  null === input.dead ||
                    "boolean" === typeof input.dead ||
                    $report(_exceptionable, {
                      path: _path + ".dead",
                      expected: "(boolean | null)",
                      value: input.dead,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectAlias",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "ObjectAlias.IMember",
                            value: elem,
                          })) &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "ObjectAlias.IMember",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectAlias",
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
        const general = (input: ObjectAlias): typia.SnakeCase<ObjectAlias> => {
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co0(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            id: input.id as any,
            email: input.email as any,
            name: input.name as any,
            sex: input.sex as any,
            age: input.age as any,
            dead: input.dead as any,
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
    ): typia.SnakeCase<ObjectAlias> => {
      const __is = (input: any): input is typia.SnakeCase<ObjectAlias> => {
        const $io0 = (input: any): boolean =>
          (null === input.id || "string" === typeof input.id) &&
          "string" === typeof input.email &&
          "string" === typeof input.name &&
          (null === input.sex ||
            2 === input.sex ||
            1 === input.sex ||
            "male" === input.sex ||
            "female" === input.sex) &&
          (null === input.age ||
            ("number" === typeof input.age && Number.isFinite(input.age))) &&
          (null === input.dead || "boolean" === typeof input.dead);
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
        ): input is typia.SnakeCase<ObjectAlias> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (null === input.id ||
              "string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "(null | string)",
                  value: input.id,
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
            (null === input.sex ||
              2 === input.sex ||
              1 === input.sex ||
              "male" === input.sex ||
              "female" === input.sex ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".sex",
                  expected: '("female" | "male" | 1 | 2 | null)',
                  value: input.sex,
                },
                errorFactory,
              )) &&
            (null === input.age ||
              ("number" === typeof input.age && Number.isFinite(input.age)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".age",
                  expected: "(null | number)",
                  value: input.age,
                },
                errorFactory,
              )) &&
            (null === input.dead ||
              "boolean" === typeof input.dead ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".dead",
                  expected: "(boolean | null)",
                  value: input.dead,
                },
                errorFactory,
              ));
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectAlias",
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
                        expected: "ObjectAlias.IMember",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "ObjectAlias.IMember",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectAlias",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
