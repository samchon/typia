import typia from "typia";
import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
export const test_functional_validateEqualsParameters_ObjectUnionImplicit =
  _test_functional_validateEqualsParameters("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )(
    (p: (input: ObjectUnionImplicit) => ObjectUnionImplicit) =>
      (
        input: ObjectUnionImplicit,
      ): import("typia").IValidation<ObjectUnionImplicit> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectUnionImplicit> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ObjectUnionImplicit => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                (null === input.slope ||
                  undefined === input.slope ||
                  ("number" === typeof input.slope &&
                    Number.isFinite(input.slope))) &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["x", "y", "slope"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1, true && _exceptionable) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2, true && _exceptionable) &&
                (null === input.width ||
                  undefined === input.width ||
                  ("number" === typeof input.width &&
                    Number.isFinite(input.width))) &&
                (null === input.distance ||
                  undefined === input.distance ||
                  ("number" === typeof input.distance &&
                    Number.isFinite(input.distance))) &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["p1", "p2", "width", "distance"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io2 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "object" === typeof input.p1 &&
                null !== input.p1 &&
                $io0(input.p1, true && _exceptionable) &&
                "object" === typeof input.p2 &&
                null !== input.p2 &&
                $io0(input.p2, true && _exceptionable) &&
                "object" === typeof input.p3 &&
                null !== input.p3 &&
                $io0(input.p3, true && _exceptionable) &&
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
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area))) &&
                (3 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["p1", "p2", "p3", "width", "height", "area"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io3 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
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
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area))) &&
                (4 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["p1", "p2", "p3", "p4", "width", "height", "area"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io4 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                Array.isArray(input.points) &&
                input.points.every(
                  (elem: any, _index2: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true && _exceptionable),
                ) &&
                (null === input.length ||
                  undefined === input.length ||
                  ("number" === typeof input.length &&
                    Number.isFinite(input.length))) &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["points", "length"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io5 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io4(input.outer, true && _exceptionable) &&
                (undefined === input.inner ||
                  (Array.isArray(input.inner) &&
                    input.inner.every(
                      (elem: any, _index3: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io4(elem, true && _exceptionable),
                    ))) &&
                (null === input.area ||
                  undefined === input.area ||
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area))) &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["outer", "inner", "area"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io6 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.radius &&
                Number.isFinite(input.radius) &&
                (undefined === input.centroid ||
                  ("object" === typeof input.centroid &&
                    null !== input.centroid &&
                    $io0(input.centroid, true && _exceptionable))) &&
                (null === input.area ||
                  undefined === input.area ||
                  ("number" === typeof input.area &&
                    Number.isFinite(input.area))) &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["radius", "centroid", "area"].some(
                        (prop: any) => key === prop,
                      )
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
                  else if (undefined !== input.p4)
                    return $io3(input, true && _exceptionable);
                  else if (undefined !== input.points)
                    return $io4(input, true && _exceptionable);
                  else if (undefined !== input.outer)
                    return $io5(input, true && _exceptionable);
                  else if (undefined !== input.radius)
                    return $io6(input, true && _exceptionable);
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
                    "object" === typeof elem &&
                    null !== elem &&
                    $iu0(elem, true),
                )
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ObjectUnionImplicit => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
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
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["x", "y", "slope"].some(
                              (prop: any) => key === prop,
                            )
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["p1", "p2", "width", "distance"].some(
                              (prop: any) => key === prop,
                            )
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
                    3 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["p1", "p2", "p3", "width", "height", "area"].some(
                              (prop: any) => key === prop,
                            )
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
                    4 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "p1",
                              "p2",
                              "p3",
                              "p4",
                              "width",
                              "height",
                              "area",
                            ].some((prop: any) => key === prop)
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["points", "length"].some(
                              (prop: any) => key === prop,
                            )
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                const $vo5 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ((("object" === typeof input.outer &&
                      null !== input.outer) ||
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
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["outer", "inner", "area"].some(
                              (prop: any) => key === prop,
                            )
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["radius", "centroid", "area"].some(
                              (prop: any) => key === prop,
                            )
                          )
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: p(input),
          errors: [],
        };
      },
  );
