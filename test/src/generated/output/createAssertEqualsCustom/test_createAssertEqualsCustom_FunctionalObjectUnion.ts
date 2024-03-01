import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";

export const test_createAssertEqualsCustom_FunctionalObjectUnion =
  _test_assertEquals(CustomGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)(
    (
      input: any,
      errorFactory: import("typia").TypeGuardError.IProps = (p) =>
        new CustomGuardError(p),
    ): FunctionalObjectUnion => {
      const $guard = (typia.createAssertEquals as any).guard(errorFactory);
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is FunctionalObjectUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y) &&
          "function" === typeof input.distance &&
          (3 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["x", "y", "distance"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1, true && _exceptionable) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2, true && _exceptionable) &&
          "function" === typeof input.length &&
          (3 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["p1", "p2", "length"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any, _index2: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io0(elem, true && _exceptionable),
          ) &&
          "function" === typeof input.length &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["points", "length"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any, _index3: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io0(elem, true && _exceptionable),
          ) &&
          "function" === typeof input.length &&
          "function" === typeof input.area &&
          (3 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["points", "length", "area"].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
          (() => {
            if (undefined !== input.x)
              return $io0(input, true && _exceptionable);
            else if (undefined !== input.p1)
              return $io1(input, true && _exceptionable);
            else if (undefined !== input.area)
              return $io3(input, true && _exceptionable);
            else return $io2(input, true && _exceptionable);
          })();
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              "object" === typeof elem && null !== elem && $iu0(elem, true),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is FunctionalObjectUnion => {
          const $join = (typia.createAssertEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.x && Number.isFinite(input.x)) ||
              $guard(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x,
              })) &&
            (("number" === typeof input.y && Number.isFinite(input.y)) ||
              $guard(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y,
              })) &&
            ("function" === typeof input.distance ||
              $guard(_exceptionable, {
                path: _path + ".distance",
                expected: "unknown",
                value: input.distance,
              })) &&
            (3 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["x", "y", "distance"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.p1 && null !== input.p1) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p1,
              })) &&
              $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p1",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p1,
              })) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p2,
              })) &&
              $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".p2",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p2,
              })) &&
            ("function" === typeof input.length ||
              $guard(_exceptionable, {
                path: _path + ".length",
                expected: "unknown",
                value: input.length,
              })) &&
            (3 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["p1", "p2", "length"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.points) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              })) &&
              input.points.every(
                (elem: any, _index2: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index2 + "]",
                      expected: "FunctionalObjectUnion.IPoint",
                      value: elem,
                    })) &&
                    $ao0(
                      elem,
                      _path + ".points[" + _index2 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".points[" + _index2 + "]",
                    expected: "FunctionalObjectUnion.IPoint",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              })) &&
            ("function" === typeof input.length ||
              $guard(_exceptionable, {
                path: _path + ".length",
                expected: "unknown",
                value: input.length,
              })) &&
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["points", "length"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.points) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              })) &&
              input.points.every(
                (elem: any, _index3: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index3 + "]",
                      expected: "FunctionalObjectUnion.IPoint",
                      value: elem,
                    })) &&
                    $ao0(
                      elem,
                      _path + ".points[" + _index3 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".points[" + _index3 + "]",
                    expected: "FunctionalObjectUnion.IPoint",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              })) &&
            ("function" === typeof input.length ||
              $guard(_exceptionable, {
                path: _path + ".length",
                expected: "unknown",
                value: input.length,
              })) &&
            ("function" === typeof input.area ||
              $guard(_exceptionable, {
                path: _path + ".area",
                expected: "unknown",
                value: input.area,
              })) &&
            (3 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["points", "length", "area"].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: "undefined",
                  value: value,
                });
              }));
          const $au0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            (() => {
              if (undefined !== input.x)
                return $ao0(input, _path, true && _exceptionable);
              else if (undefined !== input.p1)
                return $ao1(input, _path, true && _exceptionable);
              else if (undefined !== input.area)
                return $ao3(input, _path, true && _exceptionable);
              else return $ao2(input, _path, true && _exceptionable);
            })();
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "FunctionalObjectUnion",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(FunctionalObjectUnion.ILine | FunctionalObjectUnion.IPoint | FunctionalObjectUnion.IPolygon | FunctionalObjectUnion.IPolyline)",
                      value: elem,
                    })) &&
                    $au0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(FunctionalObjectUnion.ILine | FunctionalObjectUnion.IPoint | FunctionalObjectUnion.IPolygon | FunctionalObjectUnion.IPolyline)",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "FunctionalObjectUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  );
