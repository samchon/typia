import typia from "typia";
import { _test_assert } from "../../../internal/_test_assert";
import { FunctionalObjectUnion } from "../../../structures/FunctionalObjectUnion";
import { TypeGuardError } from "typia";
export const test_createAssert_FunctionalObjectUnion = _test_assert(
  TypeGuardError,
)("FunctionalObjectUnion")<FunctionalObjectUnion>(FunctionalObjectUnion)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): FunctionalObjectUnion => {
    const __is = (input: any): input is FunctionalObjectUnion => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y) &&
        "function" === typeof input.distance;
      const $io1 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        "function" === typeof input.length;
      const $io2 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "function" === typeof input.length;
      const $io3 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "function" === typeof input.length &&
        "function" === typeof input.area;
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input.x) return $io0(input);
          else if (undefined !== input.p1) return $io1(input);
          else if (undefined !== input.area) return $io3(input);
          else return $io2(input);
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is FunctionalObjectUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
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
          ("function" === typeof input.distance ||
            $guard(
              _exceptionable,
              {
                path: _path + ".distance",
                expected: "unknown",
                value: input.distance,
              },
              errorFactory,
            ));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.p1 && null !== input.p1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "FunctionalObjectUnion.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          ("function" === typeof input.length ||
            $guard(
              _exceptionable,
              {
                path: _path + ".length",
                expected: "unknown",
                value: input.length,
              },
              errorFactory,
            ));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.points) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              },
              errorFactory,
            )) &&
            input.points.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points[" + _index2 + "]",
                      expected: "FunctionalObjectUnion.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(
                    elem,
                    _path + ".points[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".points[" + _index2 + "]",
                    expected: "FunctionalObjectUnion.IPoint",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              },
              errorFactory,
            )) &&
          ("function" === typeof input.length ||
            $guard(
              _exceptionable,
              {
                path: _path + ".length",
                expected: "unknown",
                value: input.length,
              },
              errorFactory,
            ));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.points) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              },
              errorFactory,
            )) &&
            input.points.every(
              (elem: any, _index3: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points[" + _index3 + "]",
                      expected: "FunctionalObjectUnion.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(
                    elem,
                    _path + ".points[" + _index3 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".points[" + _index3 + "]",
                    expected: "FunctionalObjectUnion.IPoint",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<FunctionalObjectUnion.IPoint>",
                value: input.points,
              },
              errorFactory,
            )) &&
          ("function" === typeof input.length ||
            $guard(
              _exceptionable,
              {
                path: _path + ".length",
                expected: "unknown",
                value: input.length,
              },
              errorFactory,
            )) &&
          ("function" === typeof input.area ||
            $guard(
              _exceptionable,
              {
                path: _path + ".area",
                expected: "unknown",
                value: input.area,
              },
              errorFactory,
            ));
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
            $guard(
              true,
              {
                path: _path + "",
                expected: "FunctionalObjectUnion",
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
                      expected:
                        "(FunctionalObjectUnion.ILine | FunctionalObjectUnion.IPoint | FunctionalObjectUnion.IPolygon | FunctionalObjectUnion.IPolyline)",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $au0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(FunctionalObjectUnion.ILine | FunctionalObjectUnion.IPoint | FunctionalObjectUnion.IPolygon | FunctionalObjectUnion.IPolyline)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "FunctionalObjectUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
);
