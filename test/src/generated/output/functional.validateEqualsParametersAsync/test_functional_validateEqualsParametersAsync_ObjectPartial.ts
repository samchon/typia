import typia from "typia";
import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectPartial } from "../../../structures/ObjectPartial";
export const test_functional_validateEqualsParametersAsync_ObjectPartial =
  _test_functional_validateEqualsParametersAsync("ObjectPartial")(
    ObjectPartial,
  )(
    (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      async (
        input: ObjectPartial,
      ): Promise<import("typia").IValidation<ObjectPartial>> => {
        const paramResults = [
          ((input: any): typia.IValidation<Partial<ObjectPartial.IBase>> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is Partial<ObjectPartial.IBase> => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.boolean ||
                  "boolean" === typeof input.boolean) &&
                (undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number))) &&
                (undefined === input.string ||
                  "string" === typeof input.string) &&
                (undefined === input.array ||
                  (Array.isArray(input.array) &&
                    input.array.every(
                      (elem: any, _index1: number) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ))) &&
                (null === input.object ||
                  undefined === input.object ||
                  ("object" === typeof input.object &&
                    null !== input.object &&
                    $io1(input.object, true && _exceptionable))) &&
                (0 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["boolean", "number", "string", "array", "object"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "boolean" === typeof input.boolean &&
                "number" === typeof input.number &&
                Number.isFinite(input.number) &&
                "string" === typeof input.string &&
                Array.isArray(input.array) &&
                input.array.every(
                  (elem: any, _index2: number) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ) &&
                (null === input.object ||
                  ("object" === typeof input.object &&
                    null !== input.object &&
                    $io1(input.object, true && _exceptionable))) &&
                (5 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["boolean", "number", "string", "array", "object"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input, true)
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is Partial<ObjectPartial.IBase> => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    undefined === input.boolean ||
                      "boolean" === typeof input.boolean ||
                      $report(_exceptionable, {
                        path: _path + ".boolean",
                        expected: "(boolean | undefined)",
                        value: input.boolean,
                      }),
                    undefined === input.number ||
                      ("number" === typeof input.number &&
                        Number.isFinite(input.number)) ||
                      $report(_exceptionable, {
                        path: _path + ".number",
                        expected: "(number | undefined)",
                        value: input.number,
                      }),
                    undefined === input.string ||
                      "string" === typeof input.string ||
                      $report(_exceptionable, {
                        path: _path + ".string",
                        expected: "(string | undefined)",
                        value: input.string,
                      }),
                    undefined === input.array ||
                      ((Array.isArray(input.array) ||
                        $report(_exceptionable, {
                          path: _path + ".array",
                          expected: "(Array<number> | undefined)",
                          value: input.array,
                        })) &&
                        input.array
                          .map(
                            (elem: any, _index1: number) =>
                              ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                              $report(_exceptionable, {
                                path: _path + ".array[" + _index1 + "]",
                                expected: "number",
                                value: elem,
                              }),
                          )
                          .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".array",
                        expected: "(Array<number> | undefined)",
                        value: input.array,
                      }),
                    null === input.object ||
                      undefined === input.object ||
                      ((("object" === typeof input.object &&
                        null !== input.object) ||
                        $report(_exceptionable, {
                          path: _path + ".object",
                          expected: "(ObjectPartial.IBase | null | undefined)",
                          value: input.object,
                        })) &&
                        $vo1(
                          input.object,
                          _path + ".object",
                          true && _exceptionable,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".object",
                        expected: "(ObjectPartial.IBase | null | undefined)",
                        value: input.object,
                      }),
                    0 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "boolean",
                              "number",
                              "string",
                              "array",
                              "object",
                            ].some((prop: any) => key === prop)
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "boolean" === typeof input.boolean ||
                      $report(_exceptionable, {
                        path: _path + ".boolean",
                        expected: "boolean",
                        value: input.boolean,
                      }),
                    ("number" === typeof input.number &&
                      Number.isFinite(input.number)) ||
                      $report(_exceptionable, {
                        path: _path + ".number",
                        expected: "number",
                        value: input.number,
                      }),
                    "string" === typeof input.string ||
                      $report(_exceptionable, {
                        path: _path + ".string",
                        expected: "string",
                        value: input.string,
                      }),
                    ((Array.isArray(input.array) ||
                      $report(_exceptionable, {
                        path: _path + ".array",
                        expected: "Array<number>",
                        value: input.array,
                      })) &&
                      input.array
                        .map(
                          (elem: any, _index2: number) =>
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
                            $report(_exceptionable, {
                              path: _path + ".array[" + _index2 + "]",
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
                    null === input.object ||
                      ((("object" === typeof input.object &&
                        null !== input.object) ||
                        $report(_exceptionable, {
                          path: _path + ".object",
                          expected: "(ObjectPartial.IBase | null)",
                          value: input.object,
                        })) &&
                        $vo1(
                          input.object,
                          _path + ".object",
                          true && _exceptionable,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".object",
                        expected: "(ObjectPartial.IBase | null)",
                        value: input.object,
                      }),
                    5 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "boolean",
                              "number",
                              "string",
                              "array",
                              "object",
                            ].some((prop: any) => key === prop)
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "Partial<ObjectPartial.IBase>",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "Partial<ObjectPartial.IBase>",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );
