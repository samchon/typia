import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_assertStringify_ObjectUnionCompositePointer =
  _test_json_assertStringify(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
    ((input: any): string => {
      const assert = (input: any): ObjectUnionCompositePointer => {
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
            const $guard = (typia.json.assertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected:
                    "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                  value: input.value,
                })) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected:
                          "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                        value: elem,
                      })) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected:
                        "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected:
                  "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                value: input.value,
              });
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((("object" === typeof input.value && null !== input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected:
                    "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                  value: input.value,
                })) &&
                $au0(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected:
                  "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                value: input.value,
              });
            const $ao2 = (
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
                }));
            const $ao3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p1,
                })) &&
                $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p1,
                })) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p2,
                })) &&
                $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p2,
                }));
            const $ao4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p1,
                })) &&
                $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p1,
                })) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p2,
                })) &&
                $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p2,
                })) &&
              (((("object" === typeof input.p3 && null !== input.p3) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p3,
                })) &&
                $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p3,
                }));
            const $ao5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p1,
                })) &&
                $ao2(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p1,
                })) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p2,
                })) &&
                $ao2(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p2,
                })) &&
              (((("object" === typeof input.p3 && null !== input.p3) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p3,
                })) &&
                $ao2(input.p3, _path + ".p3", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p3,
                })) &&
              (((("object" === typeof input.p4 && null !== input.p4) ||
                $guard(_exceptionable, {
                  path: _path + ".p4",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p4,
                })) &&
                $ao2(input.p4, _path + ".p4", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p4",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.p4,
                }));
            const $ao6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.points) ||
                $guard(_exceptionable, {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionCompositePointer.IPoint>",
                  value: input.points,
                })) &&
                input.points.every(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".points[" + _index2 + "]",
                        expected: "ObjectUnionCompositePointer.IPoint",
                        value: elem,
                      })) &&
                      $ao2(
                        elem,
                        _path + ".points[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index2 + "]",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<ObjectUnionCompositePointer.IPoint>",
                value: input.points,
              });
            const $ao7 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.outer && null !== input.outer) ||
                $guard(_exceptionable, {
                  path: _path + ".outer",
                  expected: "ObjectUnionCompositePointer.IPolyline",
                  value: input.outer,
                })) &&
                $ao6(input.outer, _path + ".outer", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".outer",
                  expected: "ObjectUnionCompositePointer.IPolyline",
                  value: input.outer,
                })) &&
              (((Array.isArray(input.inner) ||
                $guard(_exceptionable, {
                  path: _path + ".inner",
                  expected: "Array<ObjectUnionCompositePointer.IPolyline>",
                  value: input.inner,
                })) &&
                input.inner.every(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".inner[" + _index3 + "]",
                        expected: "ObjectUnionCompositePointer.IPolyline",
                        value: elem,
                      })) &&
                      $ao6(
                        elem,
                        _path + ".inner[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".inner[" + _index3 + "]",
                      expected: "ObjectUnionCompositePointer.IPolyline",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".inner",
                  expected: "Array<ObjectUnionCompositePointer.IPolyline>",
                  value: input.inner,
                }));
            const $ao8 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((Array.isArray(input.outer) ||
                $guard(_exceptionable, {
                  path: _path + ".outer",
                  expected: "Array<ObjectUnionCompositePointer.IPoint>",
                  value: input.outer,
                })) &&
                input.outer.every(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".outer[" + _index4 + "]",
                        expected: "ObjectUnionCompositePointer.IPoint",
                        value: elem,
                      })) &&
                      $ao2(
                        elem,
                        _path + ".outer[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".outer[" + _index4 + "]",
                      expected: "ObjectUnionCompositePointer.IPoint",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".outer",
                  expected: "Array<ObjectUnionCompositePointer.IPoint>",
                  value: input.outer,
                })) &&
              (((("object" === typeof input.inner && null !== input.inner) ||
                $guard(_exceptionable, {
                  path: _path + ".inner",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.inner,
                })) &&
                $ao2(input.inner, _path + ".inner", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".inner",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.inner,
                }));
            const $ao9 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.centroid &&
                null !== input.centroid) ||
                $guard(_exceptionable, {
                  path: _path + ".centroid",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.centroid,
                })) &&
                $ao2(
                  input.centroid,
                  _path + ".centroid",
                  true && _exceptionable,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".centroid",
                  expected: "ObjectUnionCompositePointer.IPoint",
                  value: input.centroid,
                })) &&
              (("number" === typeof input.radius &&
                Number.isFinite(input.radius)) ||
                $guard(_exceptionable, {
                  path: _path + ".radius",
                  expected: "number",
                  value: input.radius,
                }));
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
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectUnionCompositePointer",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectUnionCompositePointer",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectUnionCompositePointer): string => {
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
        const $number = (typia.json.assertStringify as any).number;
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value
            .map((elem: any) => $so1(elem))
            .join(",")}]`}}`;
        const $so1 = (input: any): any => `{"value":${$su0(input.value)}}`;
        const $so2 = (input: any): any =>
          `{"x":${$number(input.x)},"y":${$number(input.y)}}`;
        const $so3 = (input: any): any =>
          `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
            (input.p1 as any).y,
          )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
            (input.p2 as any).y,
          )}}`}}`;
        const $so4 = (input: any): any =>
          `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
            (input.p1 as any).y,
          )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
            (input.p2 as any).y,
          )}}`},"p3":${`{"x":${$number((input.p3 as any).x)},"y":${$number(
            (input.p3 as any).y,
          )}}`}}`;
        const $so5 = (input: any): any =>
          `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
            (input.p1 as any).y,
          )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
            (input.p2 as any).y,
          )}}`},"p3":${`{"x":${$number((input.p3 as any).x)},"y":${$number(
            (input.p3 as any).y,
          )}}`},"p4":${`{"x":${$number((input.p4 as any).x)},"y":${$number(
            (input.p4 as any).y,
          )}}`}}`;
        const $so6 = (input: any): any =>
          `{"points":${`[${input.points
            .map(
              (elem: any) =>
                `{"x":${$number((elem as any).x)},"y":${$number(
                  (elem as any).y,
                )}}`,
            )
            .join(",")}]`}}`;
        const $so7 = (input: any): any =>
          `{"outer":${$so6(input.outer)},"inner":${`[${input.inner
            .map((elem: any) => $so6(elem))
            .join(",")}]`}}`;
        const $so8 = (input: any): any =>
          `{"outer":${`[${input.outer
            .map(
              (elem: any) =>
                `{"x":${$number((elem as any).x)},"y":${$number(
                  (elem as any).y,
                )}}`,
            )
            .join(",")}]`},"inner":${`{"x":${$number(
            (input.inner as any).x,
          )},"y":${$number((input.inner as any).y)}}`}}`;
        const $so9 = (input: any): any =>
          `{"centroid":${`{"x":${$number(
            (input.centroid as any).x,
          )},"y":${$number((input.centroid as any).y)}}`},"radius":${$number(
            input.radius,
          )}}`;
        const $su0 = (input: any): any =>
          (() => {
            if (undefined !== input.x) return $so2(input);
            else if (undefined !== input.p4) return $so5(input);
            else if (undefined !== input.points) return $so6(input);
            else if (
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              )
            )
              return $so8(input);
            else if (
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io6(input.outer)
            )
              return $so7(input);
            else if (undefined !== input.centroid) return $so9(input);
            else
              return (() => {
                if (undefined !== input.p3) return $so4(input);
                else return $so3(input);
              })();
          })();
        return $so0(input);
      };
      return stringify(assert(input));
    })(input),
  );
