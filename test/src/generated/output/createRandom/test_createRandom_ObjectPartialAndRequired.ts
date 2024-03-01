import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_createRandom_ObjectPartialAndRequired = _test_random(
  "ObjectPartialAndRequired",
)<ObjectPartialAndRequired>(ObjectPartialAndRequired)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (
      ObjectPartialAndRequired as any
    ).RANDOM,
  ): typia.Resolved<ObjectPartialAndRequired> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = true, _depth: number = 0): any => ({
      string: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      number: $pick([
        () => undefined,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      ])(),
      boolean: $pick([
        () => undefined,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      object: $pick([
        () => null,
        () => $ro0(true, _recursive ? 1 + _depth : _depth),
      ])(),
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
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: import("typia").TypeGuardError.IProps,
  ): ObjectPartialAndRequired => {
    const $guard = (typia.createAssert as any).guard(errorFactory);
    const __is = (input: any): input is ObjectPartialAndRequired => {
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
      ): input is ObjectPartialAndRequired => {
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.string ||
            "string" === typeof input.string ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "(string | undefined)",
              value: input.string,
            })) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number)) ||
            $guard(_exceptionable, {
              path: _path + ".number",
              expected: "(number | undefined)",
              value: input.number,
            })) &&
          (undefined === input.boolean ||
            "boolean" === typeof input.boolean ||
            $guard(_exceptionable, {
              path: _path + ".boolean",
              expected: "(boolean | undefined)",
              value: input.boolean,
            })) &&
          (null === input.object ||
            ((("object" === typeof input.object && null !== input.object) ||
              $guard(_exceptionable, {
                path: _path + ".object",
                expected: "(ObjectPartialAndRequired | null)",
                value: input.object,
              })) &&
              $ao0(input.object, _path + ".object", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".object",
              expected: "(ObjectPartialAndRequired | null)",
              value: input.object,
            })) &&
          (((Array.isArray(input.array) ||
            $guard(_exceptionable, {
              path: _path + ".array",
              expected: "Array<number>",
              value: input.array,
            })) &&
            input.array.every(
              (elem: any, _index1: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(_exceptionable, {
                  path: _path + ".array[" + _index1 + "]",
                  expected: "number",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".array",
              expected: "Array<number>",
              value: input.array,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectPartialAndRequired",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectPartialAndRequired",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
