import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { MapAlias } from "../../../structures/MapAlias";

export const test_createRandom_MapAlias = _test_random("MapAlias")<MapAlias>(
  MapAlias,
)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (MapAlias as any).RANDOM,
  ): import("typia").Resolved<MapAlias> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      boolean: new Map(
        (generator?.array ?? $generator.array)(() => [
          (generator?.boolean ?? $generator.boolean)(),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ]),
      ),
      number: new Map(
        (generator?.array ?? $generator.array)(() => [
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ]),
      ),
      strings: new Map(
        (generator?.array ?? $generator.array)(() => [
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ]),
      ),
      arrays: new Map(
        (generator?.array ?? $generator.array)(() => [
          (generator?.array ?? $generator.array)(
            () =>
              (generator?.customs ?? $generator.customs)?.number?.([]) ??
              (generator?.number ?? $generator.number)(0, 100),
          ),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ]),
      ),
      objects: new Map(
        (generator?.array ?? $generator.array)(() => [
          $ro1(_recursive, _recursive ? 1 + _depth : _depth),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ]),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      id:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      name:
        (generator?.customs ?? $generator.customs)?.string?.([]) ??
        (generator?.string ?? $generator.string)(),
      age:
        (generator?.customs ?? $generator.customs)?.number?.([]) ??
        (generator?.number ?? $generator.number)(0, 100),
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): MapAlias => {
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
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is MapAlias => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((input.boolean instanceof Map ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "Map<boolean, number>",
                value: input.boolean,
              },
              errorFactory,
            )) &&
            (() =>
              [...input.boolean].every(
                (elem: any, _index1: number) =>
                  ((Array.isArray(elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".boolean[" + _index1 + "]",
                        expected: "[boolean, number]",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    (elem.length === 2 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".boolean[" + _index1 + "]",
                          expected: "[boolean, number]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    ("boolean" === typeof elem[0] ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".boolean[" + _index1 + "][0]",
                          expected: "boolean",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof elem[1] &&
                      Number.isFinite(elem[1])) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".boolean[" + _index1 + "][1]",
                          expected: "number",
                          value: elem[1],
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean[" + _index1 + "]",
                      expected: "[boolean, number]",
                      value: elem,
                    },
                    errorFactory,
                  ),
              ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "Map<boolean, number>",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (((input.number instanceof Map ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "Map<number, number>",
                value: input.number,
              },
              errorFactory,
            )) &&
            (() =>
              [...input.number].every(
                (elem: any, _index2: number) =>
                  ((Array.isArray(elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".number[" + _index2 + "]",
                        expected: "[number, number]",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    (elem.length === 2 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".number[" + _index2 + "]",
                          expected: "[number, number]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof elem[0] &&
                      Number.isFinite(elem[0])) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".number[" + _index2 + "][0]",
                          expected: "number",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof elem[1] &&
                      Number.isFinite(elem[1])) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".number[" + _index2 + "][1]",
                          expected: "number",
                          value: elem[1],
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".number[" + _index2 + "]",
                      expected: "[number, number]",
                      value: elem,
                    },
                    errorFactory,
                  ),
              ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "Map<number, number>",
                value: input.number,
              },
              errorFactory,
            )) &&
          (((input.strings instanceof Map ||
            $guard(
              _exceptionable,
              {
                path: _path + ".strings",
                expected: "Map<string, number>",
                value: input.strings,
              },
              errorFactory,
            )) &&
            (() =>
              [...input.strings].every(
                (elem: any, _index3: number) =>
                  ((Array.isArray(elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".strings[" + _index3 + "]",
                        expected: "[string, number]",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    (elem.length === 2 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".strings[" + _index3 + "]",
                          expected: "[string, number]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    ("string" === typeof elem[0] ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".strings[" + _index3 + "][0]",
                          expected: "string",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof elem[1] &&
                      Number.isFinite(elem[1])) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".strings[" + _index3 + "][1]",
                          expected: "number",
                          value: elem[1],
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".strings[" + _index3 + "]",
                      expected: "[string, number]",
                      value: elem,
                    },
                    errorFactory,
                  ),
              ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".strings",
                expected: "Map<string, number>",
                value: input.strings,
              },
              errorFactory,
            )) &&
          (((input.arrays instanceof Map ||
            $guard(
              _exceptionable,
              {
                path: _path + ".arrays",
                expected: "Map<Array<number>, number>",
                value: input.arrays,
              },
              errorFactory,
            )) &&
            (() =>
              [...input.arrays].every(
                (elem: any, _index4: number) =>
                  ((Array.isArray(elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".arrays[" + _index4 + "]",
                        expected: "[Array<number>, number]",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    (elem.length === 2 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".arrays[" + _index4 + "]",
                          expected: "[Array<number>, number]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (((Array.isArray(elem[0]) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".arrays[" + _index4 + "][0]",
                          expected: "Array<number>",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                      elem[0].every(
                        (elem: any, _index5: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $guard(
                            _exceptionable,
                            {
                              path:
                                _path +
                                ".arrays[" +
                                _index4 +
                                "][0][" +
                                _index5 +
                                "]",
                              expected: "number",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".arrays[" + _index4 + "][0]",
                          expected: "Array<number>",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof elem[1] &&
                      Number.isFinite(elem[1])) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".arrays[" + _index4 + "][1]",
                          expected: "number",
                          value: elem[1],
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".arrays[" + _index4 + "]",
                      expected: "[Array<number>, number]",
                      value: elem,
                    },
                    errorFactory,
                  ),
              ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".arrays",
                expected: "Map<Array<number>, number>",
                value: input.arrays,
              },
              errorFactory,
            )) &&
          (((input.objects instanceof Map ||
            $guard(
              _exceptionable,
              {
                path: _path + ".objects",
                expected: "Map<MapAlias.Person, number>",
                value: input.objects,
              },
              errorFactory,
            )) &&
            (() =>
              [...input.objects].every(
                (elem: any, _index6: number) =>
                  ((Array.isArray(elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".objects[" + _index6 + "]",
                        expected: "[MapAlias.Person, number]",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    (elem.length === 2 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".objects[" + _index6 + "]",
                          expected: "[MapAlias.Person, number]",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (((("object" === typeof elem[0] && null !== elem[0]) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".objects[" + _index6 + "][0]",
                          expected: "MapAlias.Person",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                      $ao1(
                        elem[0],
                        _path + ".objects[" + _index6 + "][0]",
                        true && _exceptionable,
                      )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".objects[" + _index6 + "][0]",
                          expected: "MapAlias.Person",
                          value: elem[0],
                        },
                        errorFactory,
                      )) &&
                    (("number" === typeof elem[1] &&
                      Number.isFinite(elem[1])) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".objects[" + _index6 + "][1]",
                          expected: "number",
                          value: elem[1],
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".objects[" + _index6 + "]",
                      expected: "[MapAlias.Person, number]",
                      value: elem,
                    },
                    errorFactory,
                  ),
              ))()) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".objects",
                expected: "Map<MapAlias.Person, number>",
                value: input.objects,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: "string",
                value: input.id,
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
          (("number" === typeof input.age && Number.isFinite(input.age)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".age",
                expected: "number",
                value: input.age,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "MapAlias",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "MapAlias",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
