import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_random_ObjectPartial = _test_random(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectPartial> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        boolean: $pick([
          () => undefined,
          () => (generator?.boolean ?? $generator.boolean)(),
        ])(),
        number: $pick([
          () => undefined,
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ])(),
        string: $pick([
          () => undefined,
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
        ])(),
        array: $pick([
          () => undefined,
          () =>
            (generator?.array ?? $generator.array)(
              () =>
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            ),
        ])(),
        object: $pick([
          () => undefined,
          () => null,
          () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
      });
      const $ro1 = (_recursive: boolean = true, _depth: number = 0): any => ({
        boolean: (generator?.boolean ?? $generator.boolean)(),
        number:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        string:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        array:
          _recursive && 5 < _depth
            ? []
            : 5 >= _depth
            ? (generator?.array ?? $generator.array)(
                () =>
                  (generator?.customs ?? $generator.customs)?.number?.([]) ??
                  (generator?.number ?? $generator.number)(0, 100),
              )
            : [],
        object: $pick([
          () => null,
          () => $ro1(true, _recursive ? 1 + _depth : _depth),
        ])(),
      });
      return $ro0();
    })((ObjectPartial as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectPartial => {
    const __is = (input: any): input is ObjectPartial => {
      const $io0 = (input: any): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
          (Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ))) &&
        (null === input.object ||
          undefined === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object)));
      const $io1 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object)));
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectPartial => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
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
          (undefined === input.array ||
            ((Array.isArray(input.array) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".array",
                  expected: "(Array<number> | undefined)",
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
                expected: "(Array<number> | undefined)",
                value: input.array,
              },
              errorFactory,
            )) &&
          (null === input.object ||
            undefined === input.object ||
            ((("object" === typeof input.object && null !== input.object) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".object",
                  expected: "(ObjectPartial.IBase | null | undefined)",
                  value: input.object,
                },
                errorFactory,
              )) &&
              $ao1(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".object",
                expected: "(ObjectPartial.IBase | null | undefined)",
                value: input.object,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.boolean ||
            $guard(
              _exceptionable,
              {
                path: _path + ".boolean",
                expected: "boolean",
                value: input.boolean,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.number &&
            Number.isFinite(input.number)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".number",
                expected: "number",
                value: input.number,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: "string",
                value: input.string,
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
              (elem: any, _index2: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".array[" + _index2 + "]",
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
            )) &&
          (null === input.object ||
            ((("object" === typeof input.object && null !== input.object) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".object",
                  expected: "(ObjectPartial.IBase | null)",
                  value: input.object,
                },
                errorFactory,
              )) &&
              $ao1(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".object",
                expected: "(ObjectPartial.IBase | null)",
                value: input.object,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "Partial<ObjectPartial.IBase>",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "Partial<ObjectPartial.IBase>",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
