import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
export const test_notation_createValidateSnake_ObjectUnionComposite =
  _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )<typia.SnakeCase<ObjectUnionComposite>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ObjectUnionComposite>> => {
      const validate = (
        input: any,
      ): typia.IValidation<ObjectUnionComposite> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectUnionComposite => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y);
          const $io1 = (input: any): boolean =>
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
          const $io2 = (input: any): boolean =>
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
          const $io4 = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            );
          const $io5 = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io4(elem),
            );
          const $io6 = (input: any): boolean =>
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            "object" === typeof input.inner &&
            null !== input.inner &&
            "number" === typeof (input.inner as any).x &&
            Number.isFinite((input.inner as any).x) &&
            "number" === typeof (input.inner as any).y &&
            Number.isFinite((input.inner as any).y);
          const $io7 = (input: any): boolean =>
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
              if (undefined !== input.x) return $io0(input);
              else if (undefined !== input.p4) return $io3(input);
              else if (undefined !== input.points) return $io4(input);
              else if (
                Array.isArray(input.outer) &&
                input.outer.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
                )
              )
                return $io6(input);
              else if (
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io4(input.outer)
              )
                return $io5(input);
              else if (undefined !== input.centroid) return $io7(input);
              else
                return (() => {
                  if (undefined !== input.p3) return $io2(input);
                  else return $io1(input);
                })();
            })();
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $iu0(elem),
            )
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectUnionComposite => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.x && Number.isFinite(input.x)) ||
                  $report(_exceptionable, {
                    path: _path + ".x",
                    expected: "number",
                    value: input.x,
                  }),
                ("number" === typeof input.y && Number.isFinite(input.y)) ||
                  $report(_exceptionable, {
                    path: _path + ".y",
                    expected: "number",
                    value: input.y,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1,
                  })) &&
                  $vo0(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1,
                  }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2,
                  })) &&
                  $vo0(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2,
                  }),
              ].every((flag: boolean) => flag);
            const $vo2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1,
                  })) &&
                  $vo0(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1,
                  }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2,
                  })) &&
                  $vo0(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2,
                  }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3,
                  })) &&
                  $vo0(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3,
                  }),
              ].every((flag: boolean) => flag);
            const $vo3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1,
                  })) &&
                  $vo0(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p1,
                  }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2,
                  })) &&
                  $vo0(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p2,
                  }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3,
                  })) &&
                  $vo0(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p3,
                  }),
                ((("object" === typeof input.p4 && null !== input.p4) ||
                  $report(_exceptionable, {
                    path: _path + ".p4",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p4,
                  })) &&
                  $vo0(input.p4, _path + ".p4", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p4",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.p4,
                  }),
              ].every((flag: boolean) => flag);
            const $vo4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.points) ||
                  $report(_exceptionable, {
                    path: _path + ".points",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.points,
                  })) &&
                  input.points
                    .map(
                      (elem: any, _index2: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".points[" + _index2 + "]",
                            expected: "ObjectUnionComposite.IPoint",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + ".points[" + _index2 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".points[" + _index2 + "]",
                          expected: "ObjectUnionComposite.IPoint",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".points",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.points,
                  }),
              ].every((flag: boolean) => flag);
            const $vo5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.outer && null !== input.outer) ||
                  $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: input.outer,
                  })) &&
                  $vo4(
                    input.outer,
                    _path + ".outer",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "ObjectUnionComposite.IPolyline",
                    value: input.outer,
                  }),
                ((Array.isArray(input.inner) ||
                  $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "Array<ObjectUnionComposite.IPolyline>",
                    value: input.inner,
                  })) &&
                  input.inner
                    .map(
                      (elem: any, _index3: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".inner[" + _index3 + "]",
                            expected: "ObjectUnionComposite.IPolyline",
                            value: elem,
                          })) &&
                          $vo4(
                            elem,
                            _path + ".inner[" + _index3 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".inner[" + _index3 + "]",
                          expected: "ObjectUnionComposite.IPolyline",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "Array<ObjectUnionComposite.IPolyline>",
                    value: input.inner,
                  }),
              ].every((flag: boolean) => flag);
            const $vo6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((Array.isArray(input.outer) ||
                  $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.outer,
                  })) &&
                  input.outer
                    .map(
                      (elem: any, _index4: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".outer[" + _index4 + "]",
                            expected: "ObjectUnionComposite.IPoint",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + ".outer[" + _index4 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".outer[" + _index4 + "]",
                          expected: "ObjectUnionComposite.IPoint",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "Array<ObjectUnionComposite.IPoint>",
                    value: input.outer,
                  }),
                ((("object" === typeof input.inner && null !== input.inner) ||
                  $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.inner,
                  })) &&
                  $vo0(
                    input.inner,
                    _path + ".inner",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".inner",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.inner,
                  }),
              ].every((flag: boolean) => flag);
            const $vo7 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.centroid &&
                  null !== input.centroid) ||
                  $report(_exceptionable, {
                    path: _path + ".centroid",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.centroid,
                  })) &&
                  $vo0(
                    input.centroid,
                    _path + ".centroid",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".centroid",
                    expected: "ObjectUnionComposite.IPoint",
                    value: input.centroid,
                  }),
                ("number" === typeof input.radius &&
                  Number.isFinite(input.radius)) ||
                  $report(_exceptionable, {
                    path: _path + ".radius",
                    expected: "number",
                    value: input.radius,
                  }),
              ].every((flag: boolean) => flag);
            const $vu0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              (() => {
                if (undefined !== input.x)
                  return $vo0(input, _path, true && _exceptionable);
                else if (undefined !== input.p4)
                  return $vo3(input, _path, true && _exceptionable);
                else if (undefined !== input.points)
                  return $vo4(input, _path, true && _exceptionable);
                else if (
                  Array.isArray(input.outer) &&
                  input.outer
                    .map(
                      (elem: any, _index5: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $vo0(
                          elem,
                          _path + ".outer[" + _index5 + "]",
                          false && _exceptionable,
                        ),
                    )
                    .every((flag: boolean) => flag)
                )
                  return $vo6(input, _path, true && _exceptionable);
                else if (
                  "object" === typeof input.outer &&
                  null !== input.outer &&
                  $vo4(input.outer, _path + ".outer", false && _exceptionable)
                )
                  return $vo5(input, _path, true && _exceptionable);
                else if (undefined !== input.centroid)
                  return $vo7(input, _path, true && _exceptionable);
                else
                  return (() => {
                    if (undefined !== input.p3)
                      return $vo2(input, _path, true && _exceptionable);
                    else return $vo1(input, _path, true && _exceptionable);
                  })();
              })();
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectUnionComposite",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                          value: elem,
                        })) &&
                        $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ObjectUnionComposite.ICircle | ObjectUnionComposite.ILine | ObjectUnionComposite.IPoint | ObjectUnionComposite.IPointedShape | ObjectUnionComposite.IPolygon | ObjectUnionComposite.IPolyline | ObjectUnionComposite.IRectangle | ObjectUnionComposite.ITriangle)",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectUnionComposite",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const general = (
        input: ObjectUnionComposite,
      ): typia.SnakeCase<ObjectUnionComposite> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.x && "number" === typeof input.y;
        const $io1 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2);
        const $io2 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io0(input.p3);
        const $io3 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io0(input.p3) &&
          "object" === typeof input.p4 &&
          null !== input.p4 &&
          $io0(input.p4);
        const $io4 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          );
        const $io5 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io4(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io6 = (input: any): boolean =>
          Array.isArray(input.outer) &&
          input.outer.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          "object" === typeof input.inner &&
          null !== input.inner &&
          $io0(input.inner);
        const $io7 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          $io0(input.centroid) &&
          "number" === typeof input.radius;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $cu0(elem)
              : (elem as any),
          );
        const $cp1 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co0(elem)
              : (elem as any),
          );
        const $cp2 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co4(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          x: input.x as any,
          y: input.y as any,
        });
        const $co1 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co0(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co0(input.p2)
              : (input.p2 as any),
        });
        const $co2 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co0(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co0(input.p2)
              : (input.p2 as any),
          p3:
            "object" === typeof input.p3 && null !== input.p3
              ? $co0(input.p3)
              : (input.p3 as any),
        });
        const $co3 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co0(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co0(input.p2)
              : (input.p2 as any),
          p3:
            "object" === typeof input.p3 && null !== input.p3
              ? $co0(input.p3)
              : (input.p3 as any),
          p4:
            "object" === typeof input.p4 && null !== input.p4
              ? $co0(input.p4)
              : (input.p4 as any),
        });
        const $co4 = (input: any): any => ({
          points: Array.isArray(input.points)
            ? $cp1(input.points)
            : (input.points as any),
        });
        const $co5 = (input: any): any => ({
          outer:
            "object" === typeof input.outer && null !== input.outer
              ? $co4(input.outer)
              : (input.outer as any),
          inner: Array.isArray(input.inner)
            ? $cp2(input.inner)
            : (input.inner as any),
        });
        const $co6 = (input: any): any => ({
          outer: Array.isArray(input.outer)
            ? $cp1(input.outer)
            : (input.outer as any),
          inner:
            "object" === typeof input.inner && null !== input.inner
              ? $co0(input.inner)
              : (input.inner as any),
        });
        const $co7 = (input: any): any => ({
          centroid:
            "object" === typeof input.centroid && null !== input.centroid
              ? $co0(input.centroid)
              : (input.centroid as any),
          radius: input.radius as any,
        });
        const $cu0 = (input: any): any =>
          (() => {
            if (undefined !== input.x) return $co0(input);
            else if (undefined !== input.p4) return $co3(input);
            else if (undefined !== input.points) return $co4(input);
            else if (
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            )
              return $co6(input);
            else if (
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io4(input.outer)
            )
              return $co5(input);
            else if (undefined !== input.centroid) return $co7(input);
            else
              return (() => {
                if (undefined !== input.p3) return $co2(input);
                else return $co1(input);
              })();
          })();
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<ObjectUnionComposite> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ObjectUnionComposite> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y);
        const $io1 = (input: any): boolean =>
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
        const $io2 = (input: any): boolean =>
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
        const $io4 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          );
        const $io5 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io4(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io6 = (input: any): boolean =>
          Array.isArray(input.outer) &&
          input.outer.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          "object" === typeof input.inner &&
          null !== input.inner &&
          "number" === typeof (input.inner as any).x &&
          Number.isFinite((input.inner as any).x) &&
          "number" === typeof (input.inner as any).y &&
          Number.isFinite((input.inner as any).y);
        const $io7 = (input: any): boolean =>
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
            if (undefined !== input.x) return $io0(input);
            else if (undefined !== input.p4) return $io3(input);
            else if (undefined !== input.points) return $io4(input);
            else if (
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            )
              return $io6(input);
            else if (
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io4(input.outer)
            )
              return $io5(input);
            else if (undefined !== input.centroid) return $io7(input);
            else
              return (() => {
                if (undefined !== input.p3) return $io2(input);
                else return $io1(input);
              })();
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
        ): input is typia.SnakeCase<ObjectUnionComposite> => {
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
              ));
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
              ));
          const $ao4 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.points) ||
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
            );
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
              ));
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
              ));
          const $ao7 = (
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
              ));
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
    },
  });
