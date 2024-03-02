import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_notation_createValidateCamel_ObjectUnionImplicit =
  _test_notation_validateGeneral("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )<typia.CamelCase<ObjectUnionImplicit>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<ObjectUnionImplicit>> => {
      const validate = (input: any): typia.IValidation<ObjectUnionImplicit> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectUnionImplicit => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y) &&
            (null === input.slope ||
              undefined === input.slope ||
              ("number" === typeof input.slope &&
                Number.isFinite(input.slope)));
          const $io1 = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io0(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io0(input.p2) &&
            (null === input.width ||
              undefined === input.width ||
              ("number" === typeof input.width &&
                Number.isFinite(input.width))) &&
            (null === input.distance ||
              undefined === input.distance ||
              ("number" === typeof input.distance &&
                Number.isFinite(input.distance)));
          const $io2 = (input: any): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io0(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io0(input.p2) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            $io0(input.p3) &&
            (null === input.width ||
              undefined === input.width ||
              ("number" === typeof input.width &&
                Number.isFinite(input.width))) &&
            (null === input.height ||
              undefined === input.height ||
              ("number" === typeof input.height &&
                Number.isFinite(input.height))) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)));
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
            $io0(input.p4) &&
            (null === input.width ||
              undefined === input.width ||
              ("number" === typeof input.width &&
                Number.isFinite(input.width))) &&
            (null === input.height ||
              undefined === input.height ||
              ("number" === typeof input.height &&
                Number.isFinite(input.height))) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)));
          const $io4 = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            (null === input.length ||
              undefined === input.length ||
              ("number" === typeof input.length &&
                Number.isFinite(input.length)));
          const $io5 = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer) &&
            (undefined === input.inner ||
              (Array.isArray(input.inner) &&
                input.inner.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io4(elem),
                ))) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)));
          const $io6 = (input: any): boolean =>
            "number" === typeof input.radius &&
            Number.isFinite(input.radius) &&
            (undefined === input.centroid ||
              ("object" === typeof input.centroid &&
                null !== input.centroid &&
                $io0(input.centroid))) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)));
          const $iu0 = (input: any): any =>
            (() => {
              if (undefined !== input.x) return $io0(input);
              else if (undefined !== input.p4) return $io3(input);
              else if (undefined !== input.points) return $io4(input);
              else if (undefined !== input.outer) return $io5(input);
              else if (undefined !== input.radius) return $io6(input);
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
          const $report = (typia.notations.createValidateCamel as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectUnionImplicit => {
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
                null === input.slope ||
                  undefined === input.slope ||
                  ("number" === typeof input.slope &&
                    Number.isFinite(input.slope)) ||
                  $report(_exceptionable, {
                    path: _path + ".slope",
                    expected: "(null | number | undefined)",
                    value: input.slope,
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
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p1,
                  })) &&
                  $vo0(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p1,
                  }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p2,
                  })) &&
                  $vo0(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p2,
                  }),
                null === input.width ||
                  undefined === input.width ||
                  ("number" === typeof input.width &&
                    Number.isFinite(input.width)) ||
                  $report(_exceptionable, {
                    path: _path + ".width",
                    expected: "(null | number | undefined)",
                    value: input.width,
                  }),
                null === input.distance ||
                  undefined === input.distance ||
                  ("number" === typeof input.distance &&
                    Number.isFinite(input.distance)) ||
                  $report(_exceptionable, {
                    path: _path + ".distance",
                    expected: "(null | number | undefined)",
                    value: input.distance,
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
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p1,
                  })) &&
                  $vo0(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p1,
                  }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p2,
                  })) &&
                  $vo0(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p2,
                  }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p3,
                  })) &&
                  $vo0(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p3,
                  }),
                null === input.width ||
                  undefined === input.width ||
                  ("number" === typeof input.width &&
                    Number.isFinite(input.width)) ||
                  $report(_exceptionable, {
                    path: _path + ".width",
                    expected: "(null | number | undefined)",
                    value: input.width,
                  }),
                null === input.height ||
                  undefined === input.height ||
                  ("number" === typeof input.height &&
                    Number.isFinite(input.height)) ||
                  $report(_exceptionable, {
                    path: _path + ".height",
                    expected: "(null | number | undefined)",
                    value: input.height,
                  }),
                null === input.area ||
                  undefined === input.area ||
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area)) ||
                  $report(_exceptionable, {
                    path: _path + ".area",
                    expected: "(null | number | undefined)",
                    value: input.area,
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
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p1,
                  })) &&
                  $vo0(input.p1, _path + ".p1", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p1",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p1,
                  }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p2,
                  })) &&
                  $vo0(input.p2, _path + ".p2", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p2",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p2,
                  }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p3,
                  })) &&
                  $vo0(input.p3, _path + ".p3", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p3",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p3,
                  }),
                ((("object" === typeof input.p4 && null !== input.p4) ||
                  $report(_exceptionable, {
                    path: _path + ".p4",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p4,
                  })) &&
                  $vo0(input.p4, _path + ".p4", true && _exceptionable)) ||
                  $report(_exceptionable, {
                    path: _path + ".p4",
                    expected: "ObjectUnionImplicit.IPoint",
                    value: input.p4,
                  }),
                null === input.width ||
                  undefined === input.width ||
                  ("number" === typeof input.width &&
                    Number.isFinite(input.width)) ||
                  $report(_exceptionable, {
                    path: _path + ".width",
                    expected: "(null | number | undefined)",
                    value: input.width,
                  }),
                null === input.height ||
                  undefined === input.height ||
                  ("number" === typeof input.height &&
                    Number.isFinite(input.height)) ||
                  $report(_exceptionable, {
                    path: _path + ".height",
                    expected: "(null | number | undefined)",
                    value: input.height,
                  }),
                null === input.area ||
                  undefined === input.area ||
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area)) ||
                  $report(_exceptionable, {
                    path: _path + ".area",
                    expected: "(null | number | undefined)",
                    value: input.area,
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
                    expected: "Array<ObjectUnionImplicit.IPoint>",
                    value: input.points,
                  })) &&
                  input.points
                    .map(
                      (elem: any, _index2: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".points[" + _index2 + "]",
                            expected: "ObjectUnionImplicit.IPoint",
                            value: elem,
                          })) &&
                          $vo0(
                            elem,
                            _path + ".points[" + _index2 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".points[" + _index2 + "]",
                          expected: "ObjectUnionImplicit.IPoint",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".points",
                    expected: "Array<ObjectUnionImplicit.IPoint>",
                    value: input.points,
                  }),
                null === input.length ||
                  undefined === input.length ||
                  ("number" === typeof input.length &&
                    Number.isFinite(input.length)) ||
                  $report(_exceptionable, {
                    path: _path + ".length",
                    expected: "(null | number | undefined)",
                    value: input.length,
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
                    expected: "ObjectUnionImplicit.IPolyline",
                    value: input.outer,
                  })) &&
                  $vo4(
                    input.outer,
                    _path + ".outer",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".outer",
                    expected: "ObjectUnionImplicit.IPolyline",
                    value: input.outer,
                  }),
                undefined === input.inner ||
                  ((Array.isArray(input.inner) ||
                    $report(_exceptionable, {
                      path: _path + ".inner",
                      expected:
                        "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                      value: input.inner,
                    })) &&
                    input.inner
                      .map(
                        (elem: any, _index3: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".inner[" + _index3 + "]",
                              expected: "ObjectUnionImplicit.IPolyline",
                              value: elem,
                            })) &&
                            $vo4(
                              elem,
                              _path + ".inner[" + _index3 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".inner[" + _index3 + "]",
                            expected: "ObjectUnionImplicit.IPolyline",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".inner",
                    expected:
                      "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                    value: input.inner,
                  }),
                null === input.area ||
                  undefined === input.area ||
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area)) ||
                  $report(_exceptionable, {
                    path: _path + ".area",
                    expected: "(null | number | undefined)",
                    value: input.area,
                  }),
              ].every((flag: boolean) => flag);
            const $vo6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.radius &&
                  Number.isFinite(input.radius)) ||
                  $report(_exceptionable, {
                    path: _path + ".radius",
                    expected: "number",
                    value: input.radius,
                  }),
                undefined === input.centroid ||
                  ((("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $report(_exceptionable, {
                      path: _path + ".centroid",
                      expected: "(ObjectUnionImplicit.IPoint | undefined)",
                      value: input.centroid,
                    })) &&
                    $vo0(
                      input.centroid,
                      _path + ".centroid",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".centroid",
                    expected: "(ObjectUnionImplicit.IPoint | undefined)",
                    value: input.centroid,
                  }),
                null === input.area ||
                  undefined === input.area ||
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area)) ||
                  $report(_exceptionable, {
                    path: _path + ".area",
                    expected: "(null | number | undefined)",
                    value: input.area,
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
                else if (undefined !== input.outer)
                  return $vo5(input, _path, true && _exceptionable);
                else if (undefined !== input.radius)
                  return $vo6(input, _path, true && _exceptionable);
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
                  expected: "ObjectUnionImplicit",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                          value: elem,
                        })) &&
                        $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectUnionImplicit",
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
        input: ObjectUnionImplicit,
      ): typia.CamelCase<ObjectUnionImplicit> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.x &&
          "number" === typeof input.y &&
          (null === input.slope ||
            undefined === input.slope ||
            "number" === typeof input.slope);
        const $io1 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2) &&
          (null === input.width ||
            undefined === input.width ||
            "number" === typeof input.width) &&
          (null === input.distance ||
            undefined === input.distance ||
            "number" === typeof input.distance);
        const $io2 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io0(input.p3) &&
          (null === input.width ||
            undefined === input.width ||
            "number" === typeof input.width) &&
          (null === input.height ||
            undefined === input.height ||
            "number" === typeof input.height) &&
          (null === input.area ||
            undefined === input.area ||
            "number" === typeof input.area);
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
          $io0(input.p4) &&
          (null === input.width ||
            undefined === input.width ||
            "number" === typeof input.width) &&
          (null === input.height ||
            undefined === input.height ||
            "number" === typeof input.height) &&
          (null === input.area ||
            undefined === input.area ||
            "number" === typeof input.area);
        const $io4 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          (null === input.length ||
            undefined === input.length ||
            "number" === typeof input.length);
        const $io5 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io4(input.outer) &&
          (undefined === input.inner ||
            (Array.isArray(input.inner) &&
              input.inner.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io4(elem),
              ))) &&
          (null === input.area ||
            undefined === input.area ||
            "number" === typeof input.area);
        const $io6 = (input: any): boolean =>
          "number" === typeof input.radius &&
          (undefined === input.centroid ||
            ("object" === typeof input.centroid &&
              null !== input.centroid &&
              $io0(input.centroid))) &&
          (null === input.area ||
            undefined === input.area ||
            "number" === typeof input.area);
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
          slope: input.slope as any,
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
          width: input.width as any,
          distance: input.distance as any,
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
          width: input.width as any,
          height: input.height as any,
          area: input.area as any,
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
          width: input.width as any,
          height: input.height as any,
          area: input.area as any,
        });
        const $co4 = (input: any): any => ({
          points: Array.isArray(input.points)
            ? $cp1(input.points)
            : (input.points as any),
          length: input.length as any,
        });
        const $co5 = (input: any): any => ({
          outer:
            "object" === typeof input.outer && null !== input.outer
              ? $co4(input.outer)
              : (input.outer as any),
          inner: Array.isArray(input.inner)
            ? $cp2(input.inner)
            : (input.inner as any),
          area: input.area as any,
        });
        const $co6 = (input: any): any => ({
          radius: input.radius as any,
          centroid:
            "object" === typeof input.centroid && null !== input.centroid
              ? $co0(input.centroid)
              : (input.centroid as any),
          area: input.area as any,
        });
        const $cu0 = (input: any): any =>
          (() => {
            if (undefined !== input.x) return $co0(input);
            else if (undefined !== input.p4) return $co3(input);
            else if (undefined !== input.points) return $co4(input);
            else if (undefined !== input.outer) return $co5(input);
            else if (undefined !== input.radius) return $co6(input);
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
    ): typia.CamelCase<ObjectUnionImplicit> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectUnionImplicit> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y) &&
          (null === input.slope ||
            undefined === input.slope ||
            ("number" === typeof input.slope && Number.isFinite(input.slope)));
        const $io1 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2) &&
          (null === input.width ||
            undefined === input.width ||
            ("number" === typeof input.width &&
              Number.isFinite(input.width))) &&
          (null === input.distance ||
            undefined === input.distance ||
            ("number" === typeof input.distance &&
              Number.isFinite(input.distance)));
        const $io2 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io0(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io0(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io0(input.p3) &&
          (null === input.width ||
            undefined === input.width ||
            ("number" === typeof input.width &&
              Number.isFinite(input.width))) &&
          (null === input.height ||
            undefined === input.height ||
            ("number" === typeof input.height &&
              Number.isFinite(input.height))) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)));
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
          $io0(input.p4) &&
          (null === input.width ||
            undefined === input.width ||
            ("number" === typeof input.width &&
              Number.isFinite(input.width))) &&
          (null === input.height ||
            undefined === input.height ||
            ("number" === typeof input.height &&
              Number.isFinite(input.height))) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)));
        const $io4 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          (null === input.length ||
            undefined === input.length ||
            ("number" === typeof input.length &&
              Number.isFinite(input.length)));
        const $io5 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io4(input.outer) &&
          (undefined === input.inner ||
            (Array.isArray(input.inner) &&
              input.inner.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io4(elem),
              ))) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)));
        const $io6 = (input: any): boolean =>
          "number" === typeof input.radius &&
          Number.isFinite(input.radius) &&
          (undefined === input.centroid ||
            ("object" === typeof input.centroid &&
              null !== input.centroid &&
              $io0(input.centroid))) &&
          (null === input.area ||
            undefined === input.area ||
            ("number" === typeof input.area && Number.isFinite(input.area)));
        const $iu0 = (input: any): any =>
          (() => {
            if (undefined !== input.x) return $io0(input);
            else if (undefined !== input.p4) return $io3(input);
            else if (undefined !== input.points) return $io4(input);
            else if (undefined !== input.outer) return $io5(input);
            else if (undefined !== input.radius) return $io6(input);
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
        ): input is typia.CamelCase<ObjectUnionImplicit> => {
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
            (null === input.slope ||
              undefined === input.slope ||
              ("number" === typeof input.slope &&
                Number.isFinite(input.slope)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".slope",
                  expected: "(null | number | undefined)",
                  value: input.slope,
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
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
              $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
              $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
            (null === input.width ||
              undefined === input.width ||
              ("number" === typeof input.width &&
                Number.isFinite(input.width)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".width",
                  expected: "(null | number | undefined)",
                  value: input.width,
                },
                errorFactory,
              )) &&
            (null === input.distance ||
              undefined === input.distance ||
              ("number" === typeof input.distance &&
                Number.isFinite(input.distance)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".distance",
                  expected: "(null | number | undefined)",
                  value: input.distance,
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
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
              $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
              $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p3 && null !== input.p3) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
              $ao0(input.p3, _path + ".p3", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
            (null === input.width ||
              undefined === input.width ||
              ("number" === typeof input.width &&
                Number.isFinite(input.width)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".width",
                  expected: "(null | number | undefined)",
                  value: input.width,
                },
                errorFactory,
              )) &&
            (null === input.height ||
              undefined === input.height ||
              ("number" === typeof input.height &&
                Number.isFinite(input.height)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".height",
                  expected: "(null | number | undefined)",
                  value: input.height,
                },
                errorFactory,
              )) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".area",
                  expected: "(null | number | undefined)",
                  value: input.area,
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
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
              $ao0(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
              $ao0(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p3 && null !== input.p3) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
              $ao0(input.p3, _path + ".p3", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p4 && null !== input.p4) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p4",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p4,
                },
                errorFactory,
              )) &&
              $ao0(input.p4, _path + ".p4", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p4",
                  expected: "ObjectUnionImplicit.IPoint",
                  value: input.p4,
                },
                errorFactory,
              )) &&
            (null === input.width ||
              undefined === input.width ||
              ("number" === typeof input.width &&
                Number.isFinite(input.width)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".width",
                  expected: "(null | number | undefined)",
                  value: input.width,
                },
                errorFactory,
              )) &&
            (null === input.height ||
              undefined === input.height ||
              ("number" === typeof input.height &&
                Number.isFinite(input.height)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".height",
                  expected: "(null | number | undefined)",
                  value: input.height,
                },
                errorFactory,
              )) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".area",
                  expected: "(null | number | undefined)",
                  value: input.area,
                },
                errorFactory,
              ));
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
                  expected: "Array<ObjectUnionImplicit.IPoint>",
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
                        expected: "ObjectUnionImplicit.IPoint",
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
                      expected: "ObjectUnionImplicit.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionImplicit.IPoint>",
                  value: input.points,
                },
                errorFactory,
              )) &&
            (null === input.length ||
              undefined === input.length ||
              ("number" === typeof input.length &&
                Number.isFinite(input.length)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".length",
                  expected: "(null | number | undefined)",
                  value: input.length,
                },
                errorFactory,
              ));
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
                  expected: "ObjectUnionImplicit.IPolyline",
                  value: input.outer,
                },
                errorFactory,
              )) &&
              $ao4(input.outer, _path + ".outer", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".outer",
                  expected: "ObjectUnionImplicit.IPolyline",
                  value: input.outer,
                },
                errorFactory,
              )) &&
            (undefined === input.inner ||
              ((Array.isArray(input.inner) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".inner",
                    expected:
                      "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
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
                          expected: "ObjectUnionImplicit.IPolyline",
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
                        expected: "ObjectUnionImplicit.IPolyline",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".inner",
                  expected:
                    "(Array<ObjectUnionImplicit.IPolyline> | undefined)",
                  value: input.inner,
                },
                errorFactory,
              )) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".area",
                  expected: "(null | number | undefined)",
                  value: input.area,
                },
                errorFactory,
              ));
          const $ao6 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
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
            (undefined === input.centroid ||
              ((("object" === typeof input.centroid &&
                null !== input.centroid) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".centroid",
                    expected: "(ObjectUnionImplicit.IPoint | undefined)",
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
                  expected: "(ObjectUnionImplicit.IPoint | undefined)",
                  value: input.centroid,
                },
                errorFactory,
              )) &&
            (null === input.area ||
              undefined === input.area ||
              ("number" === typeof input.area && Number.isFinite(input.area)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".area",
                  expected: "(null | number | undefined)",
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
              else if (undefined !== input.p4)
                return $ao3(input, _path, true && _exceptionable);
              else if (undefined !== input.points)
                return $ao4(input, _path, true && _exceptionable);
              else if (undefined !== input.outer)
                return $ao5(input, _path, true && _exceptionable);
              else if (undefined !== input.radius)
                return $ao6(input, _path, true && _exceptionable);
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
                  expected: "ObjectUnionImplicit",
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
                          "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
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
                        "(ObjectUnionImplicit.ICircle | ObjectUnionImplicit.ILine | ObjectUnionImplicit.IPoint | ObjectUnionImplicit.IPolygon | ObjectUnionImplicit.IPolyline | ObjectUnionImplicit.IRectangle | ObjectUnionImplicit.ITriangle)",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectUnionImplicit",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
