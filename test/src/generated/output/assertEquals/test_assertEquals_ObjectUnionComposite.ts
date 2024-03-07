import typia from "typia";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { TypeGuardError } from "typia";
export const test_assertEquals_ObjectUnionComposite = _test_assertEquals(
  TypeGuardError,
)("ObjectUnionComposite")<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectUnionComposite => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectUnionComposite => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y) &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["x", "y"].some((prop: any) => key === prop)) return true;
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
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["p1", "p2"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1, true && _exceptionable) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2, true && _exceptionable) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3, true && _exceptionable) &&
        (3 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["p1", "p2", "p3"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1, true && _exceptionable) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2, true && _exceptionable) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3, true && _exceptionable) &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        $io0(input.p4, true && _exceptionable) &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["p1", "p2", "p3", "p4"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any, _index2: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io0(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["points"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io4(input.outer, true && _exceptionable) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any, _index3: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io4(elem, true && _exceptionable),
        ) &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["outer", "inner"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io6 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.outer) &&
        input.outer.every(
          (elem: any, _index4: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io0(elem, true && _exceptionable),
        ) &&
        "object" === typeof input.inner &&
        null !== input.inner &&
        $io0(input.inner, true && _exceptionable) &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["outer", "inner"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io7 = (input: any, _exceptionable: boolean = true): boolean =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io0(input.centroid, true && _exceptionable) &&
        "number" === typeof input.radius &&
        Number.isFinite(input.radius) &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["centroid", "radius"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $iu0 = (input: any, _exceptionable: boolean = true): any =>
        (() => {
          if (undefined !== input.x) return $io0(input, true && _exceptionable);
          else if (undefined !== input.p4)
            return $io3(input, true && _exceptionable);
          else if (undefined !== input.points)
            return $io4(input, true && _exceptionable);
          else if (
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any, _index5: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io0(elem, false && _exceptionable),
            )
          )
            return $io6(input, true && _exceptionable);
          else if (
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer, false && _exceptionable)
          )
            return $io5(input, true && _exceptionable);
          else if (undefined !== input.centroid)
            return $io7(input, true && _exceptionable);
          else
            return (() => {
              if (undefined !== input.p3)
                return $io2(input, true && _exceptionable);
              else return $io1(input, true && _exceptionable);
            })();
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
      ): input is ObjectUnionComposite => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
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
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["x", "y"].some((prop: any) => key === prop)) return true;
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
          (((("object" === typeof input.p1 && null !== input.p1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["p1", "p2"].some((prop: any) => key === prop)) return true;
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
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.p1 && null !== input.p1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p3 && null !== input.p3) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
            $ao0(input.p3, _path + ".p3", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
          (3 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["p1", "p2", "p3"].some((prop: any) => key === prop))
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
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.p1 && null !== input.p1) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
            $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p1",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p1,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p2 && null !== input.p2) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
            $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p2",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p2,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p3 && null !== input.p3) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
            $ao0(input.p3, _path + ".p3", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p3",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p3,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.p4 && null !== input.p4) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p4",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p4,
              },
              errorFactory,
            )) &&
            $ao0(input.p4, _path + ".p4", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".p4",
                expected: "ObjectUnionComposite.IPoint",
                value: input.p4,
              },
              errorFactory,
            )) &&
          (4 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["p1", "p2", "p3", "p4"].some((prop: any) => key === prop))
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
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.points) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<ObjectUnionComposite.IPoint>",
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
                      expected: "ObjectUnionComposite.IPoint",
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
                    expected: "ObjectUnionComposite.IPoint",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<ObjectUnionComposite.IPoint>",
                value: input.points,
              },
              errorFactory,
            )) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["points"].some((prop: any) => key === prop)) return true;
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
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.outer && null !== input.outer) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".outer",
                expected: "ObjectUnionComposite.IPolyline",
                value: input.outer,
              },
              errorFactory,
            )) &&
            $ao4(input.outer, _path + ".outer", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".outer",
                expected: "ObjectUnionComposite.IPolyline",
                value: input.outer,
              },
              errorFactory,
            )) &&
          (((Array.isArray(input.inner) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".inner",
                expected: "Array<ObjectUnionComposite.IPolyline>",
                value: input.inner,
              },
              errorFactory,
            )) &&
            input.inner.every(
              (elem: any, _index3: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner[" + _index3 + "]",
                      expected: "ObjectUnionComposite.IPolyline",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao4(
                    elem,
                    _path + ".inner[" + _index3 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".inner[" + _index3 + "]",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".inner",
                expected: "Array<ObjectUnionComposite.IPolyline>",
                value: input.inner,
              },
              errorFactory,
            )) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["outer", "inner"].some((prop: any) => key === prop))
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
        const $ao6 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.outer) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".outer",
                expected: "Array<ObjectUnionComposite.IPoint>",
                value: input.outer,
              },
              errorFactory,
            )) &&
            input.outer.every(
              (elem: any, _index4: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".outer[" + _index4 + "]",
                      expected: "ObjectUnionComposite.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(
                    elem,
                    _path + ".outer[" + _index4 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".outer[" + _index4 + "]",
                    expected: "ObjectUnionComposite.IPoint",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".outer",
                expected: "Array<ObjectUnionComposite.IPoint>",
                value: input.outer,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.inner && null !== input.inner) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".inner",
                expected: "ObjectUnionComposite.IPoint",
                value: input.inner,
              },
              errorFactory,
            )) &&
            $ao0(input.inner, _path + ".inner", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".inner",
                expected: "ObjectUnionComposite.IPoint",
                value: input.inner,
              },
              errorFactory,
            )) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["outer", "inner"].some((prop: any) => key === prop))
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
        const $ao7 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((("object" === typeof input.centroid && null !== input.centroid) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".centroid",
                expected: "ObjectUnionComposite.IPoint",
                value: input.centroid,
              },
              errorFactory,
            )) &&
            $ao0(
              input.centroid,
              _path + ".centroid",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".centroid",
                expected: "ObjectUnionComposite.IPoint",
                value: input.centroid,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.radius &&
            Number.isFinite(input.radius)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".radius",
                expected: "number",
                value: input.radius,
              },
              errorFactory,
            )) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["centroid", "radius"].some((prop: any) => key === prop))
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
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input.x)
              return $ao0(input, _path, true && _exceptionable);
            else if (undefined !== input.p4)
              return $ao3(input, _path, true && _exceptionable);
            else if (undefined !== input.points)
              return $ao4(input, _path, true && _exceptionable);
            else if (
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any, _index5: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $ao0(
                    elem,
                    _path + ".outer[" + _index5 + "]",
                    false && _exceptionable,
                  ),
              )
            )
              return $ao6(input, _path, true && _exceptionable);
            else if (
              "object" === typeof input.outer &&
              null !== input.outer &&
              $ao4(input.outer, _path + ".outer", false && _exceptionable)
            )
              return $ao5(input, _path, true && _exceptionable);
            else if (undefined !== input.centroid)
              return $ao7(input, _path, true && _exceptionable);
            else
              return (() => {
                if (undefined !== input.p3)
                  return $ao2(input, _path, true && _exceptionable);
                else return $ao1(input, _path, true && _exceptionable);
              })();
          })();
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectUnionComposite",
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
                        "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
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
                      "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectUnionComposite",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  })(input),
);
