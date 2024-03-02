import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_random_ObjectUndefined = _test_random(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectUndefined> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        professor: $pick([
          () => undefined,
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ])(),
        classroom: $pick([
          () => undefined,
          () => $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
        grade: $pick([
          () => undefined,
          () =>
            (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ])(),
        nothing: undefined,
        unknown: "any type used...",
        never: undefined,
      });
      const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      return (generator?.array ?? $generator.array)(() => $ro0());
    })((ObjectUndefined as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectUndefined => {
    const __is = (input: any): input is ObjectUndefined => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.name &&
        (undefined === input.professor ||
          "string" === typeof input.professor ||
          ("number" === typeof input.professor &&
            Number.isFinite(input.professor))) &&
        (undefined === input.classroom ||
          ("object" === typeof input.classroom &&
            null !== input.classroom &&
            $io1(input.classroom))) &&
        (undefined === input.grade ||
          ("number" === typeof input.grade && Number.isFinite(input.grade))) &&
        null !== input.nothing &&
        undefined === input.nothing &&
        true &&
        null !== input.never &&
        undefined === input.never;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id && "string" === typeof input.name;
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
      ): input is ObjectUndefined => {
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
          (undefined === input.professor ||
            "string" === typeof input.professor ||
            ("number" === typeof input.professor &&
              Number.isFinite(input.professor)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".professor",
                expected: "(number | string | undefined)",
                value: input.professor,
              },
              errorFactory,
            )) &&
          (undefined === input.classroom ||
            ((("object" === typeof input.classroom &&
              null !== input.classroom) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".classroom",
                  expected: "(ObjectUndefined.IClassroom | undefined)",
                  value: input.classroom,
                },
                errorFactory,
              )) &&
              $ao1(
                input.classroom,
                _path + ".classroom",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".classroom",
                expected: "(ObjectUndefined.IClassroom | undefined)",
                value: input.classroom,
              },
              errorFactory,
            )) &&
          (undefined === input.grade ||
            ("number" === typeof input.grade && Number.isFinite(input.grade)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".grade",
                expected: "(number | undefined)",
                value: input.grade,
              },
              errorFactory,
            )) &&
          (null !== input.nothing ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nothing",
                expected: "undefined",
                value: input.nothing,
              },
              errorFactory,
            )) &&
          (undefined === input.nothing ||
            $guard(
              _exceptionable,
              {
                path: _path + ".nothing",
                expected: "undefined",
                value: input.nothing,
              },
              errorFactory,
            )) &&
          true &&
          (null !== input.never ||
            $guard(
              _exceptionable,
              {
                path: _path + ".never",
                expected: "undefined",
                value: input.never,
              },
              errorFactory,
            )) &&
          (undefined === input.never ||
            $guard(
              _exceptionable,
              {
                path: _path + ".never",
                expected: "undefined",
                value: input.never,
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
            ));
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectUndefined",
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
                      expected: "ObjectUndefined.ILecture",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "ObjectUndefined.ILecture",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectUndefined",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
