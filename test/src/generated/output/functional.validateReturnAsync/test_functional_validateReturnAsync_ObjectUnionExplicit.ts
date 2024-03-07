import typia from "typia";
import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";
export const test_functional_validateReturnAsync_ObjectUnionExplicit =
  _test_functional_validateReturnAsync("ObjectUnionExplicit")(
    ObjectUnionExplicit,
  )(
    (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      async (
        input: ObjectUnionExplicit,
      ): Promise<import("typia").IValidation<ObjectUnionExplicit>> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectUnionExplicit> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectUnionExplicit => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              "point" === input.type;
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
              Number.isFinite((input.p2 as any).y) &&
              "line" === input.type;
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
              Number.isFinite((input.p2 as any).y) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              "number" === typeof (input.p3 as any).x &&
              Number.isFinite((input.p3 as any).x) &&
              "number" === typeof (input.p3 as any).y &&
              Number.isFinite((input.p3 as any).y) &&
              "triangle" === input.type;
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
              Number.isFinite((input.p3 as any).y) &&
              "object" === typeof input.p4 &&
              null !== input.p4 &&
              "number" === typeof (input.p4 as any).x &&
              Number.isFinite((input.p4 as any).x) &&
              "number" === typeof (input.p4 as any).y &&
              Number.isFinite((input.p4 as any).y) &&
              "rectangle" === input.type;
            const $io5 = (input: any): boolean =>
              Array.isArray(input.points) &&
              input.points.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              ) &&
              "polyline" === input.type;
            const $io6 = (input: any): boolean =>
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io7(input.outer) &&
              Array.isArray(input.inner) &&
              input.inner.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io7(elem),
              ) &&
              "polygon" === input.type;
            const $io7 = (input: any): boolean =>
              Array.isArray(input.points) &&
              input.points.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              );
            const $io8 = (input: any): boolean =>
              "object" === typeof input.centroid &&
              null !== input.centroid &&
              "number" === typeof (input.centroid as any).x &&
              Number.isFinite((input.centroid as any).x) &&
              "number" === typeof (input.centroid as any).y &&
              Number.isFinite((input.centroid as any).y) &&
              "number" === typeof input.radius &&
              Number.isFinite(input.radius) &&
              "circle" === input.type;
            const $iu0 = (input: any): any =>
              (() => {
                if ("point" === input.type) return $io0(input);
                else if ("line" === input.type) return $io1(input);
                else if ("triangle" === input.type) return $io3(input);
                else if ("rectangle" === input.type) return $io4(input);
                else if ("polyline" === input.type) return $io5(input);
                else if ("polygon" === input.type) return $io6(input);
                else if ("circle" === input.type) return $io8(input);
                else return false;
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
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectUnionExplicit => {
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
                  "point" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"point"',
                      value: input.type,
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
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    })) &&
                    $vo2(input.p1, _path + ".p1", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    }),
                  ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(_exceptionable, {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    })) &&
                    $vo2(input.p2, _path + ".p2", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    }),
                  "line" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"line"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vo2 = (
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
              const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(_exceptionable, {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    })) &&
                    $vo2(input.p1, _path + ".p1", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    }),
                  ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(_exceptionable, {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    })) &&
                    $vo2(input.p2, _path + ".p2", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    }),
                  ((("object" === typeof input.p3 && null !== input.p3) ||
                    $report(_exceptionable, {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    })) &&
                    $vo2(input.p3, _path + ".p3", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    }),
                  "triangle" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"triangle"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vo4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(_exceptionable, {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    })) &&
                    $vo2(input.p1, _path + ".p1", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p1",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p1,
                    }),
                  ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(_exceptionable, {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    })) &&
                    $vo2(input.p2, _path + ".p2", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p2",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p2,
                    }),
                  ((("object" === typeof input.p3 && null !== input.p3) ||
                    $report(_exceptionable, {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    })) &&
                    $vo2(input.p3, _path + ".p3", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p3",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p3,
                    }),
                  ((("object" === typeof input.p4 && null !== input.p4) ||
                    $report(_exceptionable, {
                      path: _path + ".p4",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p4,
                    })) &&
                    $vo2(input.p4, _path + ".p4", true && _exceptionable)) ||
                    $report(_exceptionable, {
                      path: _path + ".p4",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.p4,
                    }),
                  "rectangle" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"rectangle"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vo5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.points) ||
                    $report(_exceptionable, {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    })) &&
                    input.points
                      .map(
                        (elem: any, _index2: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".points[" + _index2 + "]",
                              expected: "ObjectUnionExplicit.IPoint",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + ".points[" + _index2 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".points[" + _index2 + "]",
                            expected: "ObjectUnionExplicit.IPoint",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    }),
                  "polyline" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"polyline"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vo6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.outer && null !== input.outer) ||
                    $report(_exceptionable, {
                      path: _path + ".outer",
                      expected: "ObjectUnionExplicit.IPolyline",
                      value: input.outer,
                    })) &&
                    $vo7(
                      input.outer,
                      _path + ".outer",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".outer",
                      expected: "ObjectUnionExplicit.IPolyline",
                      value: input.outer,
                    }),
                  ((Array.isArray(input.inner) ||
                    $report(_exceptionable, {
                      path: _path + ".inner",
                      expected: "Array<ObjectUnionExplicit.IPolyline>",
                      value: input.inner,
                    })) &&
                    input.inner
                      .map(
                        (elem: any, _index3: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".inner[" + _index3 + "]",
                              expected: "ObjectUnionExplicit.IPolyline",
                              value: elem,
                            })) &&
                            $vo7(
                              elem,
                              _path + ".inner[" + _index3 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".inner[" + _index3 + "]",
                            expected: "ObjectUnionExplicit.IPolyline",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".inner",
                      expected: "Array<ObjectUnionExplicit.IPolyline>",
                      value: input.inner,
                    }),
                  "polygon" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"polygon"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vo7 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.points) ||
                    $report(_exceptionable, {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    })) &&
                    input.points
                      .map(
                        (elem: any, _index4: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".points[" + _index4 + "]",
                              expected: "ObjectUnionExplicit.IPoint",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + ".points[" + _index4 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".points[" + _index4 + "]",
                            expected: "ObjectUnionExplicit.IPoint",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".points",
                      expected: "Array<ObjectUnionExplicit.IPoint>",
                      value: input.points,
                    }),
                ].every((flag: boolean) => flag);
              const $vo8 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $report(_exceptionable, {
                      path: _path + ".centroid",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.centroid,
                    })) &&
                    $vo2(
                      input.centroid,
                      _path + ".centroid",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".centroid",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: input.centroid,
                    }),
                  ("number" === typeof input.radius &&
                    Number.isFinite(input.radius)) ||
                    $report(_exceptionable, {
                      path: _path + ".radius",
                      expected: "number",
                      value: input.radius,
                    }),
                  "circle" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"circle"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if ("point" === input.type)
                    return $vo0(input, _path, true && _exceptionable);
                  else if ("line" === input.type)
                    return $vo1(input, _path, true && _exceptionable);
                  else if ("triangle" === input.type)
                    return $vo3(input, _path, true && _exceptionable);
                  else if ("rectangle" === input.type)
                    return $vo4(input, _path, true && _exceptionable);
                  else if ("polyline" === input.type)
                    return $vo5(input, _path, true && _exceptionable);
                  else if ("polygon" === input.type)
                    return $vo6(input, _path, true && _exceptionable);
                  else if ("circle" === input.type)
                    return $vo8(input, _path, true && _exceptionable);
                  else
                    return $report(_exceptionable, {
                      path: _path,
                      expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                      value: input,
                    });
                })();
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectUnionExplicit",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                            value: elem,
                          })) &&
                          $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectUnionExplicit",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
