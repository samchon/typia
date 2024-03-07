import typia from "typia";
import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { ObjectHttpFormData } from "../../../structures/ObjectHttpFormData";
export const test_functional_validateFunction_ObjectHttpFormData =
  _test_functional_validateFunction("ObjectHttpFormData")(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => ObjectHttpFormData) =>
      (
        input: ObjectHttpFormData,
      ): import("typia").IValidation<ObjectHttpFormData> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectHttpFormData> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectHttpFormData => {
              const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.id,
                ) &&
                "number" === typeof input.number &&
                Number.isFinite(input.number) &&
                Array.isArray(input.integers) &&
                input.integers.every(
                  (elem: any) =>
                    "number" === typeof elem &&
                    Math.floor(elem) === elem &&
                    -2147483648 <= elem &&
                    elem <= 2147483647,
                ) &&
                input.blob instanceof Blob &&
                Array.isArray(input.blobs) &&
                input.blobs.every((elem: any) => elem instanceof Blob) &&
                input.file instanceof File &&
                Array.isArray(input.files) &&
                input.files.every((elem: any) => elem instanceof File);
              return "object" === typeof input && null !== input && $io0(input);
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ObjectHttpFormData => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("string" === typeof input.id &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        input.id,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + ".id",
                          expected: 'string & Format<"uuid">',
                          value: input.id,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: '(string & Format<"uuid">)',
                        value: input.id,
                      }),
                    ("number" === typeof input.number &&
                      Number.isFinite(input.number)) ||
                      $report(_exceptionable, {
                        path: _path + ".number",
                        expected: "number",
                        value: input.number,
                      }),
                    ((Array.isArray(input.integers) ||
                      $report(_exceptionable, {
                        path: _path + ".integers",
                        expected: 'Array<number & Type<"int32">>',
                        value: input.integers,
                      })) &&
                      input.integers
                        .map(
                          (elem: any, _index1: number) =>
                            ("number" === typeof elem &&
                              ((Math.floor(elem) === elem &&
                                -2147483648 <= elem &&
                                elem <= 2147483647) ||
                                $report(_exceptionable, {
                                  path: _path + ".integers[" + _index1 + "]",
                                  expected: 'number & Type<"int32">',
                                  value: elem,
                                }))) ||
                            $report(_exceptionable, {
                              path: _path + ".integers[" + _index1 + "]",
                              expected: '(number & Type<"int32">)',
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".integers",
                        expected: 'Array<number & Type<"int32">>',
                        value: input.integers,
                      }),
                    input.blob instanceof Blob ||
                      $report(_exceptionable, {
                        path: _path + ".blob",
                        expected: "Blob",
                        value: input.blob,
                      }),
                    ((Array.isArray(input.blobs) ||
                      $report(_exceptionable, {
                        path: _path + ".blobs",
                        expected: "Array<Blob>",
                        value: input.blobs,
                      })) &&
                      input.blobs
                        .map(
                          (elem: any, _index2: number) =>
                            elem instanceof Blob ||
                            $report(_exceptionable, {
                              path: _path + ".blobs[" + _index2 + "]",
                              expected: "Blob",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".blobs",
                        expected: "Array<Blob>",
                        value: input.blobs,
                      }),
                    input.file instanceof File ||
                      $report(_exceptionable, {
                        path: _path + ".file",
                        expected: "File",
                        value: input.file,
                      }),
                    ((Array.isArray(input.files) ||
                      $report(_exceptionable, {
                        path: _path + ".files",
                        expected: "Array<File>",
                        value: input.files,
                      })) &&
                      input.files
                        .map(
                          (elem: any, _index3: number) =>
                            elem instanceof File ||
                            $report(_exceptionable, {
                              path: _path + ".files[" + _index3 + "]",
                              expected: "File",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".files",
                        expected: "Array<File>",
                        value: input.files,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectHttpFormData",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpFormData",
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
        const result = ((input: any): typia.IValidation<ObjectHttpFormData> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectHttpFormData => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              Array.isArray(input.integers) &&
              input.integers.every(
                (elem: any) =>
                  "number" === typeof elem &&
                  Math.floor(elem) === elem &&
                  -2147483648 <= elem &&
                  elem <= 2147483647,
              ) &&
              input.blob instanceof Blob &&
              Array.isArray(input.blobs) &&
              input.blobs.every((elem: any) => elem instanceof Blob) &&
              input.file instanceof File &&
              Array.isArray(input.files) &&
              input.files.every((elem: any) => elem instanceof File);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpFormData => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("string" === typeof input.id &&
                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      input.id,
                    ) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: 'string & Format<"uuid">',
                        value: input.id,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '(string & Format<"uuid">)',
                      value: input.id,
                    }),
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                    $report(_exceptionable, {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    }),
                  ((Array.isArray(input.integers) ||
                    $report(_exceptionable, {
                      path: _path + ".integers",
                      expected: 'Array<number & Type<"int32">>',
                      value: input.integers,
                    })) &&
                    input.integers
                      .map(
                        (elem: any, _index1: number) =>
                          ("number" === typeof elem &&
                            ((Math.floor(elem) === elem &&
                              -2147483648 <= elem &&
                              elem <= 2147483647) ||
                              $report(_exceptionable, {
                                path: _path + ".integers[" + _index1 + "]",
                                expected: 'number & Type<"int32">',
                                value: elem,
                              }))) ||
                          $report(_exceptionable, {
                            path: _path + ".integers[" + _index1 + "]",
                            expected: '(number & Type<"int32">)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".integers",
                      expected: 'Array<number & Type<"int32">>',
                      value: input.integers,
                    }),
                  input.blob instanceof Blob ||
                    $report(_exceptionable, {
                      path: _path + ".blob",
                      expected: "Blob",
                      value: input.blob,
                    }),
                  ((Array.isArray(input.blobs) ||
                    $report(_exceptionable, {
                      path: _path + ".blobs",
                      expected: "Array<Blob>",
                      value: input.blobs,
                    })) &&
                    input.blobs
                      .map(
                        (elem: any, _index2: number) =>
                          elem instanceof Blob ||
                          $report(_exceptionable, {
                            path: _path + ".blobs[" + _index2 + "]",
                            expected: "Blob",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".blobs",
                      expected: "Array<Blob>",
                      value: input.blobs,
                    }),
                  input.file instanceof File ||
                    $report(_exceptionable, {
                      path: _path + ".file",
                      expected: "File",
                      value: input.file,
                    }),
                  ((Array.isArray(input.files) ||
                    $report(_exceptionable, {
                      path: _path + ".files",
                      expected: "Array<File>",
                      value: input.files,
                    })) &&
                    input.files
                      .map(
                        (elem: any, _index3: number) =>
                          elem instanceof File ||
                          $report(_exceptionable, {
                            path: _path + ".files[" + _index3 + "]",
                            expected: "File",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".files",
                      expected: "Array<File>",
                      value: input.files,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpFormData",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHttpFormData",
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
