import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../../structures/InstanceUnion";
export const test_notation_createValidateCamel_InstanceUnion =
  _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(InstanceUnion)<
    typia.CamelCase<InstanceUnion>
  >({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<InstanceUnion>> => {
      const validate = (input: any): typia.IValidation<InstanceUnion> => {
        const errors = [] as any[];
        const __is = (input: any): input is InstanceUnion => {
          const $ip0 = (input: any) => {
            const array = input;
            const tuplePredicators = [
              [
                (top: any[]): any =>
                  top.length === 2 &&
                  "string" === typeof top[0] &&
                  "string" === typeof top[1],
                (entire: any[]): any =>
                  entire.length === 2 &&
                  "string" === typeof entire[0] &&
                  "string" === typeof entire[1],
              ] as const,
              [
                (top: any[]): any =>
                  top.length === 3 &&
                  "boolean" === typeof top[0] &&
                  "number" === typeof top[1] &&
                  Number.isFinite(top[1]) &&
                  "number" === typeof top[2] &&
                  Number.isFinite(top[2]),
                (entire: any[]): any =>
                  entire.length === 3 &&
                  "boolean" === typeof entire[0] &&
                  "number" === typeof entire[1] &&
                  Number.isFinite(entire[1]) &&
                  "number" === typeof entire[2] &&
                  Number.isFinite(entire[2]),
              ] as const,
              [
                (top: any[]): any => top.length === 0,
                (entire: any[]): any => entire.length === 0,
              ] as const,
            ];
            for (const pred of tuplePredicators)
              if (pred[0](array)) return pred[1](array);
            const top = input[0];
            if (0 === input.length) return true;
            const arrayPredicators = [
              [
                (top: any[]): any => "boolean" === typeof top,
                (entire: any[]): any =>
                  entire.every((elem: any) => "boolean" === typeof elem),
              ] as const,
              [
                (top: any[]): any =>
                  "number" === typeof top && Number.isFinite(top),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any) =>
                      "number" === typeof elem && Number.isFinite(elem),
                  ),
              ] as const,
              [
                (top: any[]): any =>
                  "object" === typeof top && null !== top && $iu0(top),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any) =>
                      "object" === typeof elem && null !== elem && $iu0(elem),
                  ),
              ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length) return passed[0]![1](array);
            else if (1 < passed.length)
              for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                  return pred[1](array);
            return false;
          };
          const $io0 = (input: any): boolean =>
            "object" === typeof input.scale &&
            null !== input.scale &&
            "number" === typeof (input.scale as any).x &&
            Number.isFinite((input.scale as any).x) &&
            "number" === typeof (input.scale as any).y &&
            Number.isFinite((input.scale as any).y) &&
            "number" === typeof (input.scale as any).z &&
            Number.isFinite((input.scale as any).z) &&
            "object" === typeof input.position &&
            null !== input.position &&
            "number" === typeof (input.position as any).x &&
            Number.isFinite((input.position as any).x) &&
            "number" === typeof (input.position as any).y &&
            Number.isFinite((input.position as any).y) &&
            "number" === typeof (input.position as any).z &&
            Number.isFinite((input.position as any).z) &&
            "object" === typeof input.rotate &&
            null !== input.rotate &&
            "number" === typeof (input.rotate as any).x &&
            Number.isFinite((input.rotate as any).x) &&
            "number" === typeof (input.rotate as any).y &&
            Number.isFinite((input.rotate as any).y) &&
            "number" === typeof (input.rotate as any).z &&
            Number.isFinite((input.rotate as any).z) &&
            "object" === typeof input.pivot &&
            null !== input.pivot &&
            "number" === typeof (input.pivot as any).x &&
            Number.isFinite((input.pivot as any).x) &&
            "number" === typeof (input.pivot as any).y &&
            Number.isFinite((input.pivot as any).y) &&
            "number" === typeof (input.pivot as any).z &&
            Number.isFinite((input.pivot as any).z);
          const $io2 = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y) &&
            "point" === input.type;
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
            "line" === input.type;
          const $io4 = (input: any): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y);
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
            "triangle" === input.type;
          const $io6 = (input: any): boolean =>
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
          const $io7 = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io4(elem),
            ) &&
            "polyline" === input.type;
          const $io8 = (input: any): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io9(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io9(elem),
            ) &&
            "polygon" === input.type;
          const $io9 = (input: any): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io4(elem),
            );
          const $io10 = (input: any): boolean =>
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
              if ("point" === input.type) return $io2(input);
              else if ("line" === input.type) return $io3(input);
              else if ("triangle" === input.type) return $io5(input);
              else if ("rectangle" === input.type) return $io6(input);
              else if ("polyline" === input.type) return $io7(input);
              else if ("polygon" === input.type) return $io8(input);
              else if ("circle" === input.type) return $io10(input);
              else return false;
            })();
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                null !== elem &&
                undefined !== elem &&
                (("number" === typeof elem && Number.isFinite(elem)) ||
                  elem instanceof Uint8Array ||
                  (elem instanceof Set &&
                    (() =>
                      [...elem].every(
                        (elem: any) => "boolean" === typeof elem,
                      ))()) ||
                  elem instanceof Map ||
                  (Array.isArray(elem) && ($ip0(elem) || false)) ||
                  ("object" === typeof elem && null !== elem && $io0(elem))),
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
          ): input is InstanceUnion => {
            const $vp0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ) => {
              const array = input;
              const tuplePredicators = [
                [
                  (top: any[]): any =>
                    top.length === 2 &&
                    [
                      "string" === typeof top[0],
                      "string" === typeof top[1],
                    ].every((flag: boolean) => flag),
                  (entire: any[]): any =>
                    (entire.length === 2 ||
                      $report(_exceptionable, {
                        path: _path,
                        expected: "[string, string]",
                        value: entire,
                      })) &&
                    [
                      "string" === typeof entire[0] ||
                        $report(_exceptionable, {
                          path: _path + "[0]",
                          expected: "string",
                          value: entire[0],
                        }),
                      "string" === typeof entire[1] ||
                        $report(_exceptionable, {
                          path: _path + "[1]",
                          expected: "string",
                          value: entire[1],
                        }),
                    ].every((flag: boolean) => flag),
                ] as const,
                [
                  (top: any[]): any =>
                    top.length === 3 &&
                    [
                      "boolean" === typeof top[0],
                      "number" === typeof top[1] && Number.isFinite(top[1]),
                      "number" === typeof top[2] && Number.isFinite(top[2]),
                    ].every((flag: boolean) => flag),
                  (entire: any[]): any =>
                    (entire.length === 3 ||
                      $report(_exceptionable, {
                        path: _path,
                        expected: "[boolean, number, number]",
                        value: entire,
                      })) &&
                    [
                      "boolean" === typeof entire[0] ||
                        $report(_exceptionable, {
                          path: _path + "[0]",
                          expected: "boolean",
                          value: entire[0],
                        }),
                      ("number" === typeof entire[1] &&
                        Number.isFinite(entire[1])) ||
                        $report(_exceptionable, {
                          path: _path + "[1]",
                          expected: "number",
                          value: entire[1],
                        }),
                      ("number" === typeof entire[2] &&
                        Number.isFinite(entire[2])) ||
                        $report(_exceptionable, {
                          path: _path + "[2]",
                          expected: "number",
                          value: entire[2],
                        }),
                    ].every((flag: boolean) => flag),
                ] as const,
                [
                  (top: any[]): any =>
                    top.length === 0 && [].every((flag: boolean) => flag),
                  (entire: any[]): any =>
                    (entire.length === 0 ||
                      $report(_exceptionable, {
                        path: _path,
                        expected: "[]",
                        value: entire,
                      })) &&
                    [].every((flag: boolean) => flag),
                ] as const,
              ];
              for (const pred of tuplePredicators)
                if (pred[0](array)) return pred[1](array);
              const top = input[0];
              if (0 === input.length) return true;
              const arrayPredicators = [
                [
                  (top: any[]): any => "boolean" === typeof top,
                  (entire: any[]): any =>
                    entire
                      .map(
                        (elem: any, _index6: number) =>
                          "boolean" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index6 + "]",
                            expected: "boolean",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag),
                ] as const,
                [
                  (top: any[]): any =>
                    "number" === typeof top && Number.isFinite(top),
                  (entire: any[]): any =>
                    entire
                      .map(
                        (elem: any, _index7: number) =>
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index7 + "]",
                            expected: "number",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag),
                ] as const,
                [
                  (top: any[]): any =>
                    "object" === typeof top &&
                    null !== top &&
                    $vu0(top, _path, false && _exceptionable),
                  (entire: any[]): any =>
                    entire
                      .map(
                        (elem: any, _index8: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index8 + "]",
                              expected:
                                '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                              value: elem,
                            })) &&
                            $vu0(
                              elem,
                              _path + "[" + _index8 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index8 + "]",
                            expected:
                              '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag),
                ] as const,
              ];
              const passed = arrayPredicators.filter((pred: any) =>
                pred[0](top),
              );
              if (1 === passed.length) return passed[0]![1](array);
              else if (1 < passed.length)
                for (const pred of passed)
                  if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
              return $report(_exceptionable, {
                path: _path,
                expected:
                  "([string, string] | [boolean, number, number] | [] | Array<boolean> | Array<number> | ObjectUnionExplicit)",
                value: input,
              });
            };
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ((("object" === typeof input.scale && null !== input.scale) ||
                  $report(_exceptionable, {
                    path: _path + ".scale",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.scale,
                  })) &&
                  $vo1(
                    input.scale,
                    _path + ".scale",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".scale",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.scale,
                  }),
                ((("object" === typeof input.position &&
                  null !== input.position) ||
                  $report(_exceptionable, {
                    path: _path + ".position",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.position,
                  })) &&
                  $vo1(
                    input.position,
                    _path + ".position",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".position",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.position,
                  }),
                ((("object" === typeof input.rotate && null !== input.rotate) ||
                  $report(_exceptionable, {
                    path: _path + ".rotate",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.rotate,
                  })) &&
                  $vo1(
                    input.rotate,
                    _path + ".rotate",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".rotate",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.rotate,
                  }),
                ((("object" === typeof input.pivot && null !== input.pivot) ||
                  $report(_exceptionable, {
                    path: _path + ".pivot",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.pivot,
                  })) &&
                  $vo1(
                    input.pivot,
                    _path + ".pivot",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".pivot",
                    expected: "ObjectSimple.IPoint3D",
                    value: input.pivot,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
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
                ("number" === typeof input.z && Number.isFinite(input.z)) ||
                  $report(_exceptionable, {
                    path: _path + ".z",
                    expected: "number",
                    value: input.z,
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
                "point" === input.type ||
                  $report(_exceptionable, {
                    path: _path + ".type",
                    expected: '"point"',
                    value: input.type,
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
                  $vo4(input.p1, _path + ".p1", true && _exceptionable)) ||
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
                  $vo4(input.p2, _path + ".p2", true && _exceptionable)) ||
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
            const $vo4 = (
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
            const $vo5 = (
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
                  $vo4(input.p1, _path + ".p1", true && _exceptionable)) ||
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
                  $vo4(input.p2, _path + ".p2", true && _exceptionable)) ||
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
                  $vo4(input.p3, _path + ".p3", true && _exceptionable)) ||
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
            const $vo6 = (
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
                  $vo4(input.p1, _path + ".p1", true && _exceptionable)) ||
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
                  $vo4(input.p2, _path + ".p2", true && _exceptionable)) ||
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
                  $vo4(input.p3, _path + ".p3", true && _exceptionable)) ||
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
                  $vo4(input.p4, _path + ".p4", true && _exceptionable)) ||
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
                      (elem: any, _index9: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".points[" + _index9 + "]",
                            expected: "ObjectUnionExplicit.IPoint",
                            value: elem,
                          })) &&
                          $vo4(
                            elem,
                            _path + ".points[" + _index9 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".points[" + _index9 + "]",
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
            const $vo8 = (
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
                  $vo9(
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
                      (elem: any, _index10: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".inner[" + _index10 + "]",
                            expected: "ObjectUnionExplicit.IPolyline",
                            value: elem,
                          })) &&
                          $vo9(
                            elem,
                            _path + ".inner[" + _index10 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".inner[" + _index10 + "]",
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
            const $vo9 = (
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
                      (elem: any, _index11: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(_exceptionable, {
                            path: _path + ".points[" + _index11 + "]",
                            expected: "ObjectUnionExplicit.IPoint",
                            value: elem,
                          })) &&
                          $vo4(
                            elem,
                            _path + ".points[" + _index11 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + ".points[" + _index11 + "]",
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
            const $vo10 = (
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
                  $vo4(
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
                  return $vo2(input, _path, true && _exceptionable);
                else if ("line" === input.type)
                  return $vo3(input, _path, true && _exceptionable);
                else if ("triangle" === input.type)
                  return $vo5(input, _path, true && _exceptionable);
                else if ("rectangle" === input.type)
                  return $vo6(input, _path, true && _exceptionable);
                else if ("polyline" === input.type)
                  return $vo7(input, _path, true && _exceptionable);
                else if ("polygon" === input.type)
                  return $vo8(input, _path, true && _exceptionable);
                else if ("circle" === input.type)
                  return $vo10(input, _path, true && _exceptionable);
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
                  expected: "InstanceUnion",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      (null !== elem ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                          value: elem,
                        })) &&
                      (undefined !== elem ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                          value: elem,
                        })) &&
                      (("number" === typeof elem && Number.isFinite(elem)) ||
                        elem instanceof Uint8Array ||
                        (elem instanceof Set &&
                          (() =>
                            [...elem]
                              .map(
                                (elem: any, _index2: number) =>
                                  "boolean" === typeof elem ||
                                  $report(true, {
                                    path:
                                      _path +
                                      "[" +
                                      _index1 +
                                      "][" +
                                      _index2 +
                                      "]",
                                    expected: "boolean",
                                    value: elem,
                                  }),
                              )
                              .every((flag: boolean) => flag))()) ||
                        elem instanceof Map ||
                        (Array.isArray(elem) &&
                          ($vp0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "[string, string] | [boolean, number, number] | [] | Array<boolean> | Array<number> | ObjectUnionExplicit",
                              value: elem,
                            }))) ||
                        ("object" === typeof elem &&
                          null !== elem &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                          value: elem,
                        }) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                          value: elem,
                        })),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "InstanceUnion",
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
        input: InstanceUnion,
      ): typia.CamelCase<InstanceUnion> => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.x &&
          "number" === typeof input.y &&
          "number" === typeof input.z;
        const $io2 = (input: any): boolean =>
          "number" === typeof input.x &&
          "number" === typeof input.y &&
          "point" === input.type;
        const $io3 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io4(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io4(input.p2) &&
          "line" === input.type;
        const $io4 = (input: any): boolean =>
          "number" === typeof input.x && "number" === typeof input.y;
        const $io5 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io4(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io4(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io4(input.p3) &&
          "triangle" === input.type;
        const $io6 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io4(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io4(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io4(input.p3) &&
          "object" === typeof input.p4 &&
          null !== input.p4 &&
          $io4(input.p4) &&
          "rectangle" === input.type;
        const $io7 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          ) &&
          "polyline" === input.type;
        const $io8 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io9(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io9(elem),
          ) &&
          "polygon" === input.type;
        const $io9 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io10 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          $io4(input.centroid) &&
          "number" === typeof input.radius &&
          "circle" === input.type;
        const $iu0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $io2(input);
            else if ("line" === input.type) return $io3(input);
            else if ("triangle" === input.type) return $io5(input);
            else if ("rectangle" === input.type) return $io6(input);
            else if ("polyline" === input.type) return $io7(input);
            else if ("polygon" === input.type) return $io8(input);
            else if ("circle" === input.type) return $io10(input);
            else return false;
          })();
        const $any = (typia.notations.createValidateCamel as any).any;
        const $throws = (typia.notations.createValidateCamel as any).throws;
        const $cp0 = (input: any) => {
          const array = input;
          const top = input[0];
          if (0 === input.length) return [];
          const arrayPredicators = [
            [
              (top: any[]): any => "boolean" === typeof top,
              (entire: any[]): any => entire.map((elem: any) => elem as any),
            ] as const,
            [
              (top: any[]): any => "number" === typeof top,
              (entire: any[]): any => entire.map((elem: any) => elem as any),
            ] as const,
            [
              (top: any[]): any =>
                "object" === typeof top && null !== top && $iu0(top),
              (entire: any[]): any =>
                entire.map((elem: any) =>
                  "object" === typeof elem && null !== elem
                    ? $cu0(elem)
                    : (elem as any),
                ),
            ] as const,
          ];
          const passed = arrayPredicators.filter((pred: any) => pred[0](top));
          if (1 === passed.length) return passed[0]![1](array);
          else if (1 < passed.length)
            for (const pred of passed)
              if (array.every((value: any) => true === pred[0](value)))
                return pred[1](array);
          $throws({
            expected: "(Array<boolean> | Array<number> | ObjectUnionExplicit)",
            value: input,
          });
        };
        const $cp1 = (input: any) =>
          input.map((elem: any) =>
            Array.isArray(elem) &&
            elem.length === 2 &&
            "string" === typeof elem[0] &&
            "string" === typeof elem[1]
              ? ([elem[0] as any, elem[1] as any] as any)
              : Array.isArray(elem) &&
                  elem.length === 3 &&
                  "boolean" === typeof elem[0] &&
                  "number" === typeof elem[1] &&
                  "number" === typeof elem[2]
                ? ([elem[0] as any, elem[1] as any, elem[2] as any] as any)
                : Array.isArray(elem) && elem.length === 0
                  ? ([] as any)
                  : Array.isArray(elem)
                    ? $cp0(elem)
                    : elem instanceof Set
                      ? (() =>
                          new Set<any>(
                            [...elem].map((elem: any) => elem as any),
                          ))()
                      : elem instanceof Map
                        ? (() =>
                            new Map<any, any>(
                              [...elem].map((elem: any) => $any(elem)),
                            ))()
                        : elem instanceof Uint8Array
                          ? elem
                          : "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
          );
        const $cp2 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co4(elem)
              : (elem as any),
          );
        const $cp3 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co9(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          scale:
            "object" === typeof input.scale && null !== input.scale
              ? $co1(input.scale)
              : (input.scale as any),
          position:
            "object" === typeof input.position && null !== input.position
              ? $co1(input.position)
              : (input.position as any),
          rotate:
            "object" === typeof input.rotate && null !== input.rotate
              ? $co1(input.rotate)
              : (input.rotate as any),
          pivot:
            "object" === typeof input.pivot && null !== input.pivot
              ? $co1(input.pivot)
              : (input.pivot as any),
        });
        const $co1 = (input: any): any => ({
          x: input.x as any,
          y: input.y as any,
          z: input.z as any,
        });
        const $co2 = (input: any): any => ({
          x: input.x as any,
          y: input.y as any,
          type: input.type as any,
        });
        const $co3 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co4(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co4(input.p2)
              : (input.p2 as any),
          type: input.type as any,
        });
        const $co4 = (input: any): any => ({
          x: input.x as any,
          y: input.y as any,
        });
        const $co5 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co4(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co4(input.p2)
              : (input.p2 as any),
          p3:
            "object" === typeof input.p3 && null !== input.p3
              ? $co4(input.p3)
              : (input.p3 as any),
          type: input.type as any,
        });
        const $co6 = (input: any): any => ({
          p1:
            "object" === typeof input.p1 && null !== input.p1
              ? $co4(input.p1)
              : (input.p1 as any),
          p2:
            "object" === typeof input.p2 && null !== input.p2
              ? $co4(input.p2)
              : (input.p2 as any),
          p3:
            "object" === typeof input.p3 && null !== input.p3
              ? $co4(input.p3)
              : (input.p3 as any),
          p4:
            "object" === typeof input.p4 && null !== input.p4
              ? $co4(input.p4)
              : (input.p4 as any),
          type: input.type as any,
        });
        const $co7 = (input: any): any => ({
          points: Array.isArray(input.points)
            ? $cp2(input.points)
            : (input.points as any),
          type: input.type as any,
        });
        const $co8 = (input: any): any => ({
          outer:
            "object" === typeof input.outer && null !== input.outer
              ? $co9(input.outer)
              : (input.outer as any),
          inner: Array.isArray(input.inner)
            ? $cp3(input.inner)
            : (input.inner as any),
          type: input.type as any,
        });
        const $co9 = (input: any): any => ({
          points: Array.isArray(input.points)
            ? $cp2(input.points)
            : (input.points as any),
        });
        const $co10 = (input: any): any => ({
          centroid:
            "object" === typeof input.centroid && null !== input.centroid
              ? $co4(input.centroid)
              : (input.centroid as any),
          radius: input.radius as any,
          type: input.type as any,
        });
        const $cu0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $co2(input);
            else if ("line" === input.type) return $co3(input);
            else if ("triangle" === input.type) return $co5(input);
            else if ("rectangle" === input.type) return $co6(input);
            else if ("polyline" === input.type) return $co7(input);
            else if ("polygon" === input.type) return $co8(input);
            else if ("circle" === input.type) return $co10(input);
            else
              $throws({
                expected:
                  '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                value: input,
              });
          })();
        return Array.isArray(input) ? $cp1(input) : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<InstanceUnion> => {
      const __is = (input: any): input is typia.CamelCase<InstanceUnion> => {
        const $ip0 = (input: any) => {
          const array = input;
          const tuplePredicators = [
            [
              (top: any[]): any =>
                top.length === 2 &&
                "string" === typeof top[0] &&
                "string" === typeof top[1],
              (entire: any[]): any =>
                entire.length === 2 &&
                "string" === typeof entire[0] &&
                "string" === typeof entire[1],
            ] as const,
            [
              (top: any[]): any =>
                top.length === 3 &&
                "boolean" === typeof top[0] &&
                "number" === typeof top[1] &&
                Number.isFinite(top[1]) &&
                "number" === typeof top[2] &&
                Number.isFinite(top[2]),
              (entire: any[]): any =>
                entire.length === 3 &&
                "boolean" === typeof entire[0] &&
                "number" === typeof entire[1] &&
                Number.isFinite(entire[1]) &&
                "number" === typeof entire[2] &&
                Number.isFinite(entire[2]),
            ] as const,
            [
              (top: any[]): any => top.length === 0,
              (entire: any[]): any => entire.length === 0,
            ] as const,
          ];
          for (const pred of tuplePredicators)
            if (pred[0](array)) return pred[1](array);
          const top = input[0];
          if (0 === input.length) return true;
          const arrayPredicators = [
            [
              (top: any[]): any => "boolean" === typeof top,
              (entire: any[]): any =>
                entire.every((elem: any) => "boolean" === typeof elem),
            ] as const,
            [
              (top: any[]): any =>
                "number" === typeof top && Number.isFinite(top),
              (entire: any[]): any =>
                entire.every(
                  (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
                ),
            ] as const,
            [
              (top: any[]): any =>
                "object" === typeof top && null !== top && $iu0(top),
              (entire: any[]): any =>
                entire.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
                ),
            ] as const,
          ];
          const passed = arrayPredicators.filter((pred: any) => pred[0](top));
          if (1 === passed.length) return passed[0]![1](array);
          else if (1 < passed.length)
            for (const pred of passed)
              if (array.every((value: any) => true === pred[0](value)))
                return pred[1](array);
          return false;
        };
        const $io0 = (input: any): boolean =>
          "object" === typeof input.scale &&
          null !== input.scale &&
          "number" === typeof (input.scale as any).x &&
          Number.isFinite((input.scale as any).x) &&
          "number" === typeof (input.scale as any).y &&
          Number.isFinite((input.scale as any).y) &&
          "number" === typeof (input.scale as any).z &&
          Number.isFinite((input.scale as any).z) &&
          "object" === typeof input.position &&
          null !== input.position &&
          "number" === typeof (input.position as any).x &&
          Number.isFinite((input.position as any).x) &&
          "number" === typeof (input.position as any).y &&
          Number.isFinite((input.position as any).y) &&
          "number" === typeof (input.position as any).z &&
          Number.isFinite((input.position as any).z) &&
          "object" === typeof input.rotate &&
          null !== input.rotate &&
          "number" === typeof (input.rotate as any).x &&
          Number.isFinite((input.rotate as any).x) &&
          "number" === typeof (input.rotate as any).y &&
          Number.isFinite((input.rotate as any).y) &&
          "number" === typeof (input.rotate as any).z &&
          Number.isFinite((input.rotate as any).z) &&
          "object" === typeof input.pivot &&
          null !== input.pivot &&
          "number" === typeof (input.pivot as any).x &&
          Number.isFinite((input.pivot as any).x) &&
          "number" === typeof (input.pivot as any).y &&
          Number.isFinite((input.pivot as any).y) &&
          "number" === typeof (input.pivot as any).z &&
          Number.isFinite((input.pivot as any).z);
        const $io2 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y) &&
          "point" === input.type;
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
          "line" === input.type;
        const $io4 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y);
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
          "triangle" === input.type;
        const $io6 = (input: any): boolean =>
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
        const $io7 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          ) &&
          "polyline" === input.type;
        const $io8 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io9(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io9(elem),
          ) &&
          "polygon" === input.type;
        const $io9 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io10 = (input: any): boolean =>
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
            if ("point" === input.type) return $io2(input);
            else if ("line" === input.type) return $io3(input);
            else if ("triangle" === input.type) return $io5(input);
            else if ("rectangle" === input.type) return $io6(input);
            else if ("polyline" === input.type) return $io7(input);
            else if ("polygon" === input.type) return $io8(input);
            else if ("circle" === input.type) return $io10(input);
            else return false;
          })();
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              null !== elem &&
              undefined !== elem &&
              (("number" === typeof elem && Number.isFinite(elem)) ||
                elem instanceof Uint8Array ||
                (elem instanceof Set &&
                  (() =>
                    [...elem].every(
                      (elem: any) => "boolean" === typeof elem,
                    ))()) ||
                elem instanceof Map ||
                (Array.isArray(elem) && ($ip0(elem) || false)) ||
                ("object" === typeof elem && null !== elem && $io0(elem))),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<InstanceUnion> => {
          const $guard = (typia.createAssert as any).guard;
          const $ap0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ) => {
            const array = input;
            const tuplePredicators = [
              [
                (top: any[]): any =>
                  top.length === 2 &&
                  "string" === typeof top[0] &&
                  "string" === typeof top[1],
                (entire: any[]): any =>
                  (entire.length === 2 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path,
                        expected: "[string, string]",
                        value: entire,
                      },
                      errorFactory,
                    )) &&
                  ("string" === typeof entire[0] ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[0]",
                        expected: "string",
                        value: entire[0],
                      },
                      errorFactory,
                    )) &&
                  ("string" === typeof entire[1] ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[1]",
                        expected: "string",
                        value: entire[1],
                      },
                      errorFactory,
                    )),
              ] as const,
              [
                (top: any[]): any =>
                  top.length === 3 &&
                  "boolean" === typeof top[0] &&
                  "number" === typeof top[1] &&
                  Number.isFinite(top[1]) &&
                  "number" === typeof top[2] &&
                  Number.isFinite(top[2]),
                (entire: any[]): any =>
                  (entire.length === 3 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path,
                        expected: "[boolean, number, number]",
                        value: entire,
                      },
                      errorFactory,
                    )) &&
                  ("boolean" === typeof entire[0] ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: entire[0],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof entire[1] &&
                    Number.isFinite(entire[1])) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[1]",
                        expected: "number",
                        value: entire[1],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof entire[2] &&
                    Number.isFinite(entire[2])) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[2]",
                        expected: "number",
                        value: entire[2],
                      },
                      errorFactory,
                    )),
              ] as const,
              [
                (top: any[]): any => top.length === 0,
                (entire: any[]): any =>
                  entire.length === 0 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path,
                      expected: "[]",
                      value: entire,
                    },
                    errorFactory,
                  ),
              ] as const,
            ];
            for (const pred of tuplePredicators)
              if (pred[0](array)) return pred[1](array);
            const top = input[0];
            if (0 === input.length) return true;
            const arrayPredicators = [
              [
                (top: any[]): any => "boolean" === typeof top,
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index6: number) =>
                      "boolean" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index6 + "]",
                          expected: "boolean",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  ),
              ] as const,
              [
                (top: any[]): any =>
                  "number" === typeof top && Number.isFinite(top),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index7: number) =>
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index7 + "]",
                          expected: "number",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  ),
              ] as const,
              [
                (top: any[]): any =>
                  "object" === typeof top &&
                  null !== top &&
                  $au0(top, _path, false && _exceptionable),
                (entire: any[]): any =>
                  entire.every(
                    (elem: any, _index8: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[" + _index8 + "]",
                            expected:
                              '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $au0(
                          elem,
                          _path + "[" + _index8 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index8 + "]",
                          expected:
                            '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  ),
              ] as const,
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length) return passed[0]![1](array);
            else if (1 < passed.length)
              for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                  return pred[1](array);
            return $guard(
              _exceptionable,
              {
                path: _path,
                expected:
                  "([string, string] | [boolean, number, number] | [] | Array<boolean> | Array<number> | ObjectUnionExplicit)",
                value: input,
              },
              errorFactory,
            );
          };
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
              $ao1(input.scale, _path + ".scale", true && _exceptionable)) ||
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
            (((("object" === typeof input.rotate && null !== input.rotate) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".rotate",
                  expected: "ObjectSimple.IPoint3D",
                  value: input.rotate,
                },
                errorFactory,
              )) &&
              $ao1(input.rotate, _path + ".rotate", true && _exceptionable)) ||
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
              $ao1(input.pivot, _path + ".pivot", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".pivot",
                  expected: "ObjectSimple.IPoint3D",
                  value: input.pivot,
                },
                errorFactory,
              ));
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
              ));
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
              )) &&
            ("point" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"point"',
                  value: input.type,
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
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
              $ao4(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
              $ao4(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
            ("line" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"line"',
                  value: input.type,
                },
                errorFactory,
              ));
          const $ao4 = (
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
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
              $ao4(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
              $ao4(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p3 && null !== input.p3) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
              $ao4(input.p3, _path + ".p3", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
            ("triangle" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"triangle"',
                  value: input.type,
                },
                errorFactory,
              ));
          const $ao6 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.p1 && null !== input.p1) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
              $ao4(input.p1, _path + ".p1", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p1,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p2 && null !== input.p2) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
              $ao4(input.p2, _path + ".p2", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p2,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p3 && null !== input.p3) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
              $ao4(input.p3, _path + ".p3", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p3,
                },
                errorFactory,
              )) &&
            (((("object" === typeof input.p4 && null !== input.p4) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p4",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p4,
                },
                errorFactory,
              )) &&
              $ao4(input.p4, _path + ".p4", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".p4",
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.p4,
                },
                errorFactory,
              )) &&
            ("rectangle" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"rectangle"',
                  value: input.type,
                },
                errorFactory,
              ));
          const $ao7 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.points) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionExplicit.IPoint>",
                  value: input.points,
                },
                errorFactory,
              )) &&
              input.points.every(
                (elem: any, _index9: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".points[" + _index9 + "]",
                        expected: "ObjectUnionExplicit.IPoint",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao4(
                      elem,
                      _path + ".points[" + _index9 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points[" + _index9 + "]",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionExplicit.IPoint>",
                  value: input.points,
                },
                errorFactory,
              )) &&
            ("polyline" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"polyline"',
                  value: input.type,
                },
                errorFactory,
              ));
          const $ao8 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((("object" === typeof input.outer && null !== input.outer) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".outer",
                  expected: "ObjectUnionExplicit.IPolyline",
                  value: input.outer,
                },
                errorFactory,
              )) &&
              $ao9(input.outer, _path + ".outer", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".outer",
                  expected: "ObjectUnionExplicit.IPolyline",
                  value: input.outer,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.inner) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".inner",
                  expected: "Array<ObjectUnionExplicit.IPolyline>",
                  value: input.inner,
                },
                errorFactory,
              )) &&
              input.inner.every(
                (elem: any, _index10: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".inner[" + _index10 + "]",
                        expected: "ObjectUnionExplicit.IPolyline",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao9(
                      elem,
                      _path + ".inner[" + _index10 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".inner[" + _index10 + "]",
                      expected: "ObjectUnionExplicit.IPolyline",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".inner",
                  expected: "Array<ObjectUnionExplicit.IPolyline>",
                  value: input.inner,
                },
                errorFactory,
              )) &&
            ("polygon" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"polygon"',
                  value: input.type,
                },
                errorFactory,
              ));
          const $ao9 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.points) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionExplicit.IPoint>",
                  value: input.points,
                },
                errorFactory,
              )) &&
              input.points.every(
                (elem: any, _index11: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".points[" + _index11 + "]",
                        expected: "ObjectUnionExplicit.IPoint",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao4(
                      elem,
                      _path + ".points[" + _index11 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".points[" + _index11 + "]",
                      expected: "ObjectUnionExplicit.IPoint",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".points",
                expected: "Array<ObjectUnionExplicit.IPoint>",
                value: input.points,
              },
              errorFactory,
            );
          const $ao10 = (
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
                  expected: "ObjectUnionExplicit.IPoint",
                  value: input.centroid,
                },
                errorFactory,
              )) &&
              $ao4(
                input.centroid,
                _path + ".centroid",
                true && _exceptionable,
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".centroid",
                  expected: "ObjectUnionExplicit.IPoint",
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
            ("circle" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"circle"',
                  value: input.type,
                },
                errorFactory,
              ));
          const $au0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            (() => {
              if ("point" === input.type)
                return $ao2(input, _path, true && _exceptionable);
              else if ("line" === input.type)
                return $ao3(input, _path, true && _exceptionable);
              else if ("triangle" === input.type)
                return $ao5(input, _path, true && _exceptionable);
              else if ("rectangle" === input.type)
                return $ao6(input, _path, true && _exceptionable);
              else if ("polyline" === input.type)
                return $ao7(input, _path, true && _exceptionable);
              else if ("polygon" === input.type)
                return $ao8(input, _path, true && _exceptionable);
              else if ("circle" === input.type)
                return $ao10(input, _path, true && _exceptionable);
              else
                return $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                  },
                  errorFactory,
                );
            })();
          return (
            ((Array.isArray(input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "InstanceUnion",
                  value: input,
                },
                errorFactory,
              )) &&
              input.every(
                (elem: any, _index1: number) =>
                  (null !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (undefined !== elem ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof elem && Number.isFinite(elem)) ||
                    elem instanceof Uint8Array ||
                    (elem instanceof Set &&
                      (() =>
                        [...elem].every(
                          (elem: any, _index2: number) =>
                            "boolean" === typeof elem ||
                            $guard(
                              true,
                              {
                                path:
                                  _path + "[" + _index1 + "][" + _index2 + "]",
                                expected: "boolean",
                                value: elem,
                              },
                              errorFactory,
                            ),
                        ))()) ||
                    elem instanceof Map ||
                    (Array.isArray(elem) &&
                      ($ap0(
                        elem,
                        _path + "[" + _index1 + "]",
                        true && _exceptionable,
                      ) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "[string, string] | [boolean, number, number] | [] | Array<boolean> | Array<number> | ObjectUnionExplicit",
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    ("object" === typeof elem &&
                      null !== elem &&
                      $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                        value: elem,
                      },
                      errorFactory,
                    ) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                        value: elem,
                      },
                      errorFactory,
                    )),
              )) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "InstanceUnion",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
