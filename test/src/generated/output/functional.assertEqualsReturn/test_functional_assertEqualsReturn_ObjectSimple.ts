import typia from "typia";
import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturn_ObjectSimple =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectSimple")(
    ObjectSimple,
  )(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      (input: ObjectSimple): ObjectSimple => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectSimple.IBox3D => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectSimple.IBox3D => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.scale &&
              null !== input.scale &&
              $io1(input.scale, true && _exceptionable) &&
              "object" === typeof input.position &&
              null !== input.position &&
              $io1(input.position, true && _exceptionable) &&
              "object" === typeof input.rotate &&
              null !== input.rotate &&
              $io1(input.rotate, true && _exceptionable) &&
              "object" === typeof input.pivot &&
              null !== input.pivot &&
              $io1(input.pivot, true && _exceptionable) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["scale", "position", "rotate", "pivot"].some(
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
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              "number" === typeof input.z &&
              Number.isFinite(input.z) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["x", "y", "z"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimple.IBox3D => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((("object" === typeof input.scale && null !== input.scale) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".scale",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.scale,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.scale,
                    _path + ".scale",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".scale",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.scale,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.position &&
                  null !== input.position) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".position",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.position,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.position,
                    _path + ".position",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".position",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.position,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.rotate &&
                  null !== input.rotate) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".rotate",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.rotate,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.rotate,
                    _path + ".rotate",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".rotate",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.rotate,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.pivot && null !== input.pivot) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".pivot",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.pivot,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.pivot,
                    _path + ".pivot",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".pivot",
                      expected: "ObjectSimple.IPoint3D",
                      value: input.pivot,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["scale", "position", "rotate", "pivot"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".x",
                      expected: "number",
                      value: input.x,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".y",
                      expected: "number",
                      value: input.y,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.z && Number.isFinite(input.z)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".z",
                      expected: "number",
                      value: input.z,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["x", "y", "z"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectSimple.IBox3D",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectSimple.IBox3D",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
