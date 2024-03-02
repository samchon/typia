import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_misc_createAssertCloneCustom_ObjectUnionCompositePointer =
  _test_misc_assertClone(CustomGuardError)(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): typia.Resolved<ObjectUnionCompositePointer> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectUnionCompositePointer => {
        const __is = (input: any): input is ObjectUnionCompositePointer => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
          const $io2 = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y);
          const $io3 = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof (input.p1 as any).x &&
            Number.isFinite((input.p1 as any).x) &&
            "number" === typeof (input.p1 as any).y &&
            Number.isFinite((input.p1 as any).y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof (input.p2 as any).x &&
            Number.isFinite((input.p2 as any).x) &&
            "number" === typeof (input.p2 as any).y &&
            Number.isFinite((input.p2 as any).y);
          const $io4 = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof (input.p1 as any).x &&
            Number.isFinite((input.p1 as any).x) &&
            "number" === typeof (input.p1 as any).y &&
            Number.isFinite((input.p1 as any).y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof (input.p2 as any).x &&
            Number.isFinite((input.p2 as any).x) &&
            "number" === typeof (input.p2 as any).y &&
            Number.isFinite((input.p2 as any).y) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof (input.p3 as any).x &&
            Number.isFinite((input.p3 as any).x) &&
            "number" === typeof (input.p3 as any).y &&
            Number.isFinite((input.p3 as any).y);
          const $io5 = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof (input.p1 as any).x &&
            Number.isFinite((input.p1 as any).x) &&
            "number" === typeof (input.p1 as any).y &&
            Number.isFinite((input.p1 as any).y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof (input.p2 as any).x &&
            Number.isFinite((input.p2 as any).x) &&
            "number" === typeof (input.p2 as any).y &&
            Number.isFinite((input.p2 as any).y) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof (input.p3 as any).x &&
            Number.isFinite((input.p3 as any).x) &&
            "number" === typeof (input.p3 as any).y &&
            Number.isFinite((input.p3 as any).y) &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            "number" === typeof (input.p4 as any).x &&
            Number.isFinite((input.p4 as any).x) &&
            "number" === typeof (input.p4 as any).y &&
            Number.isFinite((input.p4 as any).y);
          const $io6 = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
            );
          const $io7 = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io6(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io6(elem),
            );
          const $io8 = (input: any): boolean =>
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "object" === typeof input.inner &&
            null !== input.inner &&
            "number" === typeof (input.inner as any).x &&
            Number.isFinite((input.inner as any).x) &&
            "number" === typeof (input.inner as any).y &&
            Number.isFinite((input.inner as any).y);
          const $io9 = (input: any): boolean =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            "number" === typeof (input.centroid as any).x &&
            Number.isFinite((input.centroid as any).x) &&
            "number" === typeof (input.centroid as any).y &&
            Number.isFinite((input.centroid as any).y) &&
            "number" === typeof input.radius &&
            Number.isFinite(input.radius);
          const $iu0 = (input: any): any =>
            (() => {
              if (undefined !== input.x) return $io2(input);
              else if (undefined !== input.p4) return $io5(input);
              else if (undefined !== input.points) return $io6(input);
              else if (
                Array.isArray(input.outer) &&
                input.outer.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
                )
              )
                return $io8(input);
              else if (
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io6(input.outer)
              )
                return $io7(input);
              else if (undefined !== input.centroid) return $io9(input);
              else
                return (() => {
                  if (undefined !== input.p3) return $io4(input);
                  else return $io3(input);
                })();
            })();
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectUnionCompositePointer => {
            const $guard = (typia.misc.createAssertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected:
                      "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected:
                            "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value[" + _index1 + "]",
                        expected:
                          "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected:
                    "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((("object" === typeof input.value && null !== input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected:
                      "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
                $au0(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected:
                    "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao2 = (
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
                ));
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
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p1,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p1",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p1,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p2",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p2,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p2",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p2,
                  },
                  errorFactory,
                ));
            const $ao4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p1",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p1,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p1",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p1,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p2",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p2,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p2",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p2,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.p3 && null !== input.p3) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p3",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p3,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p3",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p3,
                  },
                  errorFactory,
                ));
            const $ao5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p1",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p1,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p1",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p1,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p2",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p2,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p2",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p2,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.p3 && null !== input.p3) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p3",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p3,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p3",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p3,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.p4 && null !== input.p4) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p4",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p4,
                  },
                  errorFactory,
                )) &&
                $ao2(input.p4, _path + ".p4", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".p4",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.p4,
                  },
                  errorFactory,
                ));
            const $ao6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.points) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".points",
                    expected: "Array<ObjectUnionCompositePointer.IPoint>",
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
                          expected: "ObjectUnionCompositePointer.IPoint",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao2(
                        elem,
                        _path + ".points[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".points[" + _index2 + "]",
                        expected: "ObjectUnionCompositePointer.IPoint",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionCompositePointer.IPoint>",
                  value: input.points,
                },
                errorFactory,
              );
            const $ao7 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.outer && null !== input.outer) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".outer",
                    expected: "ObjectUnionCompositePointer.IPolyline",
                    value: input.outer,
                  },
                  errorFactory,
                )) &&
                $ao6(input.outer, _path + ".outer", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".outer",
                    expected: "ObjectUnionCompositePointer.IPolyline",
                    value: input.outer,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.inner) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".inner",
                    expected: "Array<ObjectUnionCompositePointer.IPolyline>",
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
                          expected: "ObjectUnionCompositePointer.IPolyline",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao6(
                        elem,
                        _path + ".inner[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".inner[" + _index3 + "]",
                        expected: "ObjectUnionCompositePointer.IPolyline",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".inner",
                    expected: "Array<ObjectUnionCompositePointer.IPolyline>",
                    value: input.inner,
                  },
                  errorFactory,
                ));
            const $ao8 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((Array.isArray(input.outer) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".outer",
                    expected: "Array<ObjectUnionCompositePointer.IPoint>",
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
                          expected: "ObjectUnionCompositePointer.IPoint",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao2(
                        elem,
                        _path + ".outer[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".outer[" + _index4 + "]",
                        expected: "ObjectUnionCompositePointer.IPoint",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".outer",
                    expected: "Array<ObjectUnionCompositePointer.IPoint>",
                    value: input.outer,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.inner && null !== input.inner) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".inner",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.inner,
                  },
                  errorFactory,
                )) &&
                $ao2(input.inner, _path + ".inner", true && _exceptionable)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".inner",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.inner,
                  },
                  errorFactory,
                ));
            const $ao9 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.centroid &&
                null !== input.centroid) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".centroid",
                    expected: "ObjectUnionCompositePointer.IPoint",
                    value: input.centroid,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.centroid,
                  _path + ".centroid",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".centroid",
                    expected: "ObjectUnionCompositePointer.IPoint",
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
                ));
            const $au0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              (() => {
                if (undefined !== input.x)
                  return $ao2(input, _path, true && _exceptionable);
                else if (undefined !== input.p4)
                  return $ao5(input, _path, true && _exceptionable);
                else if (undefined !== input.points)
                  return $ao6(input, _path, true && _exceptionable);
                else if (
                  Array.isArray(input.outer) &&
                  input.outer.every(
                    (elem: any, _index5: number) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      $ao2(
                        elem,
                        _path + ".outer[" + _index5 + "]",
                        false && _exceptionable,
                      ),
                  )
                )
                  return $ao8(input, _path, true && _exceptionable);
                else if (
                  "object" === typeof input.outer &&
                  null !== input.outer &&
                  $ao6(input.outer, _path + ".outer", false && _exceptionable)
                )
                  return $ao7(input, _path, true && _exceptionable);
                else if (undefined !== input.centroid)
                  return $ao9(input, _path, true && _exceptionable);
                else
                  return (() => {
                    if (undefined !== input.p3)
                      return $ao4(input, _path, true && _exceptionable);
                    else return $ao3(input, _path, true && _exceptionable);
                  })();
              })();
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectUnionCompositePointer",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectUnionCompositePointer",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ObjectUnionCompositePointer,
      ): typia.Resolved<ObjectUnionCompositePointer> => {
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
        const $io2 = (input: any): boolean =>
          "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io2(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io2(input.p2);
        const $io4 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io2(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io2(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io2(input.p3);
        const $io5 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io2(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io2(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io2(input.p3) &&
          "object" === typeof input.p4 &&
          null !== input.p4 &&
          $io2(input.p4);
        const $io6 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          );
        const $io7 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io6(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io6(elem),
          );
        const $io8 = (input: any): boolean =>
          Array.isArray(input.outer) &&
          input.outer.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          ) &&
          "object" === typeof input.inner &&
          null !== input.inner &&
          $io2(input.inner);
        const $io9 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          $io2(input.centroid) &&
          "number" === typeof input.radius;
        const $iu0 = (input: any): any =>
          (() => {
            if (undefined !== input.x) return $io2(input);
            else if (undefined !== input.p4) return $io5(input);
            else if (undefined !== input.points) return $io6(input);
            else if (
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              )
            )
              return $io8(input);
            else if (
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io6(input.outer)
            )
              return $io7(input);
            else if (undefined !== input.centroid) return $io9(input);
            else
              return (() => {
                if (undefined !== input.p3) return $io4(input);
                else return $io3(input);
              })();
          })();
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co1(elem)
              : (elem as any),
          );
        const $cp1 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co2(elem)
              : (elem as any),
          );
        const $cp2 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co6(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          value: Array.isArray(input.value)
            ? $cp0(input.value)
            : (input.value as any),
        });
        const $co1 = (input: any): any => ({
          value:
            "object" === typeof input.value && null !== input.value
              ? $cu0(input.value)
              : (input.value as any),
        });
        const $co2 = (input: any): any => ({
          x: input.x as any,
          y: input.y as any,
        });
        const $co3 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co2(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co2(input.p2)
              : (input.p2 as any),
        });
        const $co4 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co2(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co2(input.p2)
              : (input.p2 as any),
          p3:
            "object" === typeof input.p3 && null !== input.p3
              ? $co2(input.p3)
              : (input.p3 as any),
        });
        const $co5 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co2(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co2(input.p2)
              : (input.p2 as any),
          p3:
            "object" === typeof input.p3 && null !== input.p3
              ? $co2(input.p3)
              : (input.p3 as any),
          p4:
            "object" === typeof input.p4 && null !== input.p4
              ? $co2(input.p4)
              : (input.p4 as any),
        });
        const $co6 = (input: any): any => ({
          points: Array.isArray(input.points)
            ? $cp1(input.points)
            : (input.points as any),
        });
        const $co7 = (input: any): any => ({
          outer:
            "object" === typeof input.outer && null !== input.outer
              ? $co6(input.outer)
              : (input.outer as any),
          inner: Array.isArray(input.inner)
            ? $cp2(input.inner)
            : (input.inner as any),
        });
        const $co8 = (input: any): any => ({
          outer: Array.isArray(input.outer)
            ? $cp1(input.outer)
            : (input.outer as any),
          inner:
            "object" === typeof input.inner && null !== input.inner
              ? $co2(input.inner)
              : (input.inner as any),
        });
        const $co9 = (input: any): any => ({
          centroid:
            "object" === typeof input.centroid && null !== input.centroid
              ? $co2(input.centroid)
              : (input.centroid as any),
          radius: input.radius as any,
        });
        const $cu0 = (input: any): any =>
          (() => {
            if (undefined !== input.x) return $co2(input);
            else if (undefined !== input.p4) return $co5(input);
            else if (undefined !== input.points) return $co6(input);
            else if (
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              )
            )
              return $co8(input);
            else if (
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io6(input.outer)
            )
              return $co7(input);
            else if (undefined !== input.centroid) return $co9(input);
            else
              return (() => {
                if (undefined !== input.p3) return $co4(input);
                else return $co3(input);
              })();
          })();
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    },
  );
