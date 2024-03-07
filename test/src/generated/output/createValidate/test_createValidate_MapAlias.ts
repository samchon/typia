import typia from "typia";
import { _test_validate } from "../../../internal/_test_validate";
import { MapAlias } from "../../../structures/MapAlias";
export const test_createValidate_MapAlias = _test_validate(
  "MapAlias",
)<MapAlias>(MapAlias)((input: any): typia.IValidation<MapAlias> => {
  const errors = [] as any[];
  const __is = (input: any): input is MapAlias => {
    const $io0 = (input: any): boolean =>
      input.boolean instanceof Map &&
      (() =>
        [...input.boolean].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "boolean" === typeof elem[0] &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.number instanceof Map &&
      (() =>
        [...input.number].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "number" === typeof elem[0] &&
            Number.isFinite(elem[0]) &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.strings instanceof Map &&
      (() =>
        [...input.strings].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "string" === typeof elem[0] &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.arrays instanceof Map &&
      (() =>
        [...input.arrays].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            Array.isArray(elem[0]) &&
            elem[0].every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ) &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))() &&
      input.objects instanceof Map &&
      (() =>
        [...input.objects].every(
          (elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "object" === typeof elem[0] &&
            null !== elem[0] &&
            $io1(elem[0]) &&
            "number" === typeof elem[1] &&
            Number.isFinite(elem[1]),
        ))();
    const $io1 = (input: any): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      "number" === typeof input.age &&
      Number.isFinite(input.age);
    return "object" === typeof input && null !== input && $io0(input);
  };
  if (false === __is(input)) {
    const $report = (typia.createValidate as any).report(errors);
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is MapAlias => {
      const $vo0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          ((input.boolean instanceof Map ||
            $report(_exceptionable, {
              path: _path + ".boolean",
              expected: "Map<boolean, number>",
              value: input.boolean,
            })) &&
            (() =>
              [...input.boolean]
                .map(
                  (elem: any, _index1: number) =>
                    ((Array.isArray(elem) ||
                      $report(_exceptionable, {
                        path: _path + ".boolean[" + _index1 + "]",
                        expected: "[boolean, number]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $report(_exceptionable, {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "[boolean, number]",
                          value: elem,
                        })) &&
                      [
                        "boolean" === typeof elem[0] ||
                          $report(_exceptionable, {
                            path: _path + ".boolean[" + _index1 + "][0]",
                            expected: "boolean",
                            value: elem[0],
                          }),
                        ("number" === typeof elem[1] &&
                          Number.isFinite(elem[1])) ||
                          $report(_exceptionable, {
                            path: _path + ".boolean[" + _index1 + "][1]",
                            expected: "number",
                            value: elem[1],
                          }),
                      ].every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".boolean[" + _index1 + "]",
                      expected: "[boolean, number]",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag))()) ||
            $report(_exceptionable, {
              path: _path + ".boolean",
              expected: "Map<boolean, number>",
              value: input.boolean,
            }),
          ((input.number instanceof Map ||
            $report(_exceptionable, {
              path: _path + ".number",
              expected: "Map<number, number>",
              value: input.number,
            })) &&
            (() =>
              [...input.number]
                .map(
                  (elem: any, _index2: number) =>
                    ((Array.isArray(elem) ||
                      $report(_exceptionable, {
                        path: _path + ".number[" + _index2 + "]",
                        expected: "[number, number]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $report(_exceptionable, {
                          path: _path + ".number[" + _index2 + "]",
                          expected: "[number, number]",
                          value: elem,
                        })) &&
                      [
                        ("number" === typeof elem[0] &&
                          Number.isFinite(elem[0])) ||
                          $report(_exceptionable, {
                            path: _path + ".number[" + _index2 + "][0]",
                            expected: "number",
                            value: elem[0],
                          }),
                        ("number" === typeof elem[1] &&
                          Number.isFinite(elem[1])) ||
                          $report(_exceptionable, {
                            path: _path + ".number[" + _index2 + "][1]",
                            expected: "number",
                            value: elem[1],
                          }),
                      ].every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".number[" + _index2 + "]",
                      expected: "[number, number]",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag))()) ||
            $report(_exceptionable, {
              path: _path + ".number",
              expected: "Map<number, number>",
              value: input.number,
            }),
          ((input.strings instanceof Map ||
            $report(_exceptionable, {
              path: _path + ".strings",
              expected: "Map<string, number>",
              value: input.strings,
            })) &&
            (() =>
              [...input.strings]
                .map(
                  (elem: any, _index3: number) =>
                    ((Array.isArray(elem) ||
                      $report(_exceptionable, {
                        path: _path + ".strings[" + _index3 + "]",
                        expected: "[string, number]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $report(_exceptionable, {
                          path: _path + ".strings[" + _index3 + "]",
                          expected: "[string, number]",
                          value: elem,
                        })) &&
                      [
                        "string" === typeof elem[0] ||
                          $report(_exceptionable, {
                            path: _path + ".strings[" + _index3 + "][0]",
                            expected: "string",
                            value: elem[0],
                          }),
                        ("number" === typeof elem[1] &&
                          Number.isFinite(elem[1])) ||
                          $report(_exceptionable, {
                            path: _path + ".strings[" + _index3 + "][1]",
                            expected: "number",
                            value: elem[1],
                          }),
                      ].every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".strings[" + _index3 + "]",
                      expected: "[string, number]",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag))()) ||
            $report(_exceptionable, {
              path: _path + ".strings",
              expected: "Map<string, number>",
              value: input.strings,
            }),
          ((input.arrays instanceof Map ||
            $report(_exceptionable, {
              path: _path + ".arrays",
              expected: "Map<Array<number>, number>",
              value: input.arrays,
            })) &&
            (() =>
              [...input.arrays]
                .map(
                  (elem: any, _index4: number) =>
                    ((Array.isArray(elem) ||
                      $report(_exceptionable, {
                        path: _path + ".arrays[" + _index4 + "]",
                        expected: "[Array<number>, number]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $report(_exceptionable, {
                          path: _path + ".arrays[" + _index4 + "]",
                          expected: "[Array<number>, number]",
                          value: elem,
                        })) &&
                      [
                        ((Array.isArray(elem[0]) ||
                          $report(_exceptionable, {
                            path: _path + ".arrays[" + _index4 + "][0]",
                            expected: "Array<number>",
                            value: elem[0],
                          })) &&
                          elem[0]
                            .map(
                              (elem: any, _index5: number) =>
                                ("number" === typeof elem &&
                                  Number.isFinite(elem)) ||
                                $report(_exceptionable, {
                                  path:
                                    _path +
                                    ".arrays[" +
                                    _index4 +
                                    "][0][" +
                                    _index5 +
                                    "]",
                                  expected: "number",
                                  value: elem,
                                }),
                            )
                            .every((flag: boolean) => flag)) ||
                          $report(_exceptionable, {
                            path: _path + ".arrays[" + _index4 + "][0]",
                            expected: "Array<number>",
                            value: elem[0],
                          }),
                        ("number" === typeof elem[1] &&
                          Number.isFinite(elem[1])) ||
                          $report(_exceptionable, {
                            path: _path + ".arrays[" + _index4 + "][1]",
                            expected: "number",
                            value: elem[1],
                          }),
                      ].every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".arrays[" + _index4 + "]",
                      expected: "[Array<number>, number]",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag))()) ||
            $report(_exceptionable, {
              path: _path + ".arrays",
              expected: "Map<Array<number>, number>",
              value: input.arrays,
            }),
          ((input.objects instanceof Map ||
            $report(_exceptionable, {
              path: _path + ".objects",
              expected: "Map<MapAlias.Person, number>",
              value: input.objects,
            })) &&
            (() =>
              [...input.objects]
                .map(
                  (elem: any, _index6: number) =>
                    ((Array.isArray(elem) ||
                      $report(_exceptionable, {
                        path: _path + ".objects[" + _index6 + "]",
                        expected: "[MapAlias.Person, number]",
                        value: elem,
                      })) &&
                      (elem.length === 2 ||
                        $report(_exceptionable, {
                          path: _path + ".objects[" + _index6 + "]",
                          expected: "[MapAlias.Person, number]",
                          value: elem,
                        })) &&
                      [
                        ((("object" === typeof elem[0] && null !== elem[0]) ||
                          $report(_exceptionable, {
                            path: _path + ".objects[" + _index6 + "][0]",
                            expected: "MapAlias.Person",
                            value: elem[0],
                          })) &&
                          $vo1(
                            elem[0],
                            _path + ".objects[" + _index6 + "][0]",
                            true && _exceptionable,
                          )) ||
                          $report(_exceptionable, {
                            path: _path + ".objects[" + _index6 + "][0]",
                            expected: "MapAlias.Person",
                            value: elem[0],
                          }),
                        ("number" === typeof elem[1] &&
                          Number.isFinite(elem[1])) ||
                          $report(_exceptionable, {
                            path: _path + ".objects[" + _index6 + "][1]",
                            expected: "number",
                            value: elem[1],
                          }),
                      ].every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".objects[" + _index6 + "]",
                      expected: "[MapAlias.Person, number]",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag))()) ||
            $report(_exceptionable, {
              path: _path + ".objects",
              expected: "Map<MapAlias.Person, number>",
              value: input.objects,
            }),
        ].every((flag: boolean) => flag);
      const $vo1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        [
          "string" === typeof input.id ||
            $report(_exceptionable, {
              path: _path + ".id",
              expected: "string",
              value: input.id,
            }),
          "string" === typeof input.name ||
            $report(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            }),
          ("number" === typeof input.age && Number.isFinite(input.age)) ||
            $report(_exceptionable, {
              path: _path + ".age",
              expected: "number",
              value: input.age,
            }),
        ].every((flag: boolean) => flag);
      return (
        ((("object" === typeof input && null !== input) ||
          $report(true, {
            path: _path + "",
            expected: "MapAlias",
            value: input,
          })) &&
          $vo0(input, _path + "", true)) ||
        $report(true, {
          path: _path + "",
          expected: "MapAlias",
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
});
