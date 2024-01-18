import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_misc_assertPrune_ObjectUnionExplicitPointer =
  _test_misc_assertPrune(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    ((input: any): ObjectUnionExplicitPointer => {
      const assert = (input: any): ObjectUnionExplicitPointer => {
        const __is = (input: any): input is ObjectUnionExplicitPointer => {
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
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectUnionExplicitPointer => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.misc.assertPrune",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<IPointer<ObjectUnionExplicitPointer.Shape>>",
                  value: input.value,
                })) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "IPointer<ObjectUnionExplicitPointer.Shape>",
                        value: elem,
                      })) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "IPointer<ObjectUnionExplicitPointer.Shape>",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<IPointer<ObjectUnionExplicitPointer.Shape>>",
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
                    '(ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle>)',
                  value: input.value,
                })) &&
                $au0(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected:
                  '(ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle>)',
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
                })) &&
              ("point" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"point"',
                  value: input.type,
                }));
            const $ao3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p1,
                })) &&
                $ao4(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p1,
                })) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p2,
                })) &&
                $ao4(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p2,
                })) &&
              ("line" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"line"',
                  value: input.type,
                }));
            const $ao4 = (
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
            const $ao5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p1,
                })) &&
                $ao4(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p1,
                })) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p2,
                })) &&
                $ao4(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p2,
                })) &&
              (((("object" === typeof input.p3 && null !== input.p3) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p3,
                })) &&
                $ao4(input.p3, _path + ".p3", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p3,
                })) &&
              ("triangle" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"triangle"',
                  value: input.type,
                }));
            const $ao6 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.p1 && null !== input.p1) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p1,
                })) &&
                $ao4(input.p1, _path + ".p1", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p1",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p1,
                })) &&
              (((("object" === typeof input.p2 && null !== input.p2) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p2,
                })) &&
                $ao4(input.p2, _path + ".p2", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p2",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p2,
                })) &&
              (((("object" === typeof input.p3 && null !== input.p3) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p3,
                })) &&
                $ao4(input.p3, _path + ".p3", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p3",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p3,
                })) &&
              (((("object" === typeof input.p4 && null !== input.p4) ||
                $guard(_exceptionable, {
                  path: _path + ".p4",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p4,
                })) &&
                $ao4(input.p4, _path + ".p4", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".p4",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.p4,
                })) &&
              ("rectangle" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"rectangle"',
                  value: input.type,
                }));
            const $ao7 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((Array.isArray(input.points) ||
                $guard(_exceptionable, {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionExplicitPointer.IPoint>",
                  value: input.points,
                })) &&
                input.points.every(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".points[" + _index2 + "]",
                        expected: "ObjectUnionExplicitPointer.IPoint",
                        value: elem,
                      })) &&
                      $ao4(
                        elem,
                        _path + ".points[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index2 + "]",
                      expected: "ObjectUnionExplicitPointer.IPoint",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionExplicitPointer.IPoint>",
                  value: input.points,
                })) &&
              ("polyline" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"polyline"',
                  value: input.type,
                }));
            const $ao8 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.outer && null !== input.outer) ||
                $guard(_exceptionable, {
                  path: _path + ".outer",
                  expected: "ObjectUnionExplicitPointer.IPolyline",
                  value: input.outer,
                })) &&
                $ao9(input.outer, _path + ".outer", true && _exceptionable)) ||
                $guard(_exceptionable, {
                  path: _path + ".outer",
                  expected: "ObjectUnionExplicitPointer.IPolyline",
                  value: input.outer,
                })) &&
              (((Array.isArray(input.inner) ||
                $guard(_exceptionable, {
                  path: _path + ".inner",
                  expected: "Array<ObjectUnionExplicitPointer.IPolyline>",
                  value: input.inner,
                })) &&
                input.inner.every(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".inner[" + _index3 + "]",
                        expected: "ObjectUnionExplicitPointer.IPolyline",
                        value: elem,
                      })) &&
                      $ao9(
                        elem,
                        _path + ".inner[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".inner[" + _index3 + "]",
                      expected: "ObjectUnionExplicitPointer.IPolyline",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".inner",
                  expected: "Array<ObjectUnionExplicitPointer.IPolyline>",
                  value: input.inner,
                })) &&
              ("polygon" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"polygon"',
                  value: input.type,
                }));
            const $ao9 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.points) ||
                $guard(_exceptionable, {
                  path: _path + ".points",
                  expected: "Array<ObjectUnionExplicitPointer.IPoint>",
                  value: input.points,
                })) &&
                input.points.every(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".points[" + _index4 + "]",
                        expected: "ObjectUnionExplicitPointer.IPoint",
                        value: elem,
                      })) &&
                      $ao4(
                        elem,
                        _path + ".points[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".points[" + _index4 + "]",
                      expected: "ObjectUnionExplicitPointer.IPoint",
                      value: elem,
                    }),
                )) ||
              $guard(_exceptionable, {
                path: _path + ".points",
                expected: "Array<ObjectUnionExplicitPointer.IPoint>",
                value: input.points,
              });
            const $ao10 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.centroid &&
                null !== input.centroid) ||
                $guard(_exceptionable, {
                  path: _path + ".centroid",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.centroid,
                })) &&
                $ao4(
                  input.centroid,
                  _path + ".centroid",
                  true && _exceptionable,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".centroid",
                  expected: "ObjectUnionExplicitPointer.IPoint",
                  value: input.centroid,
                })) &&
              (("number" === typeof input.radius &&
                Number.isFinite(input.radius)) ||
                $guard(_exceptionable, {
                  path: _path + ".radius",
                  expected: "number",
                  value: input.radius,
                })) &&
              ("circle" === input.type ||
                $guard(_exceptionable, {
                  path: _path + ".type",
                  expected: '"circle"',
                  value: input.type,
                }));
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
                  return $guard(_exceptionable, {
                    path: _path,
                    expected:
                      '(ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle>)',
                    value: input,
                  });
              })();
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectUnionExplicitPointer",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectUnionExplicitPointer",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: ObjectUnionExplicitPointer): void => {
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
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
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $throws = require("typia/lib/functional/$throws").$throws;
        const $pp0 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
          });
        const $pp1 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po4(elem);
          });
        const $pp2 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po9(elem);
          });
        const $po0 = (input: any): any => {
          if (Array.isArray(input.value)) $pp0(input.value);
          for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
          }
        };
        const $po1 = (input: any): any => {
          if ("object" === typeof input.value && null !== input.value)
            $pu0(input.value);
          for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
          }
        };
        const $po2 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key || "type" === key) continue;
            delete input[key];
          }
        };
        const $po3 = (input: any): any => {
          if ("object" === typeof input.p1 && null !== input.p1) $po4(input.p1);
          if ("object" === typeof input.p2 && null !== input.p2) $po4(input.p2);
          for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "type" === key) continue;
            delete input[key];
          }
        };
        const $po4 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key) continue;
            delete input[key];
          }
        };
        const $po5 = (input: any): any => {
          if ("object" === typeof input.p1 && null !== input.p1) $po4(input.p1);
          if ("object" === typeof input.p2 && null !== input.p2) $po4(input.p2);
          if ("object" === typeof input.p3 && null !== input.p3) $po4(input.p3);
          for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "p3" === key || "type" === key)
              continue;
            delete input[key];
          }
        };
        const $po6 = (input: any): any => {
          if ("object" === typeof input.p1 && null !== input.p1) $po4(input.p1);
          if ("object" === typeof input.p2 && null !== input.p2) $po4(input.p2);
          if ("object" === typeof input.p3 && null !== input.p3) $po4(input.p3);
          if ("object" === typeof input.p4 && null !== input.p4) $po4(input.p4);
          for (const key of Object.keys(input)) {
            if (
              "p1" === key ||
              "p2" === key ||
              "p3" === key ||
              "p4" === key ||
              "type" === key
            )
              continue;
            delete input[key];
          }
        };
        const $po7 = (input: any): any => {
          if (Array.isArray(input.points)) $pp1(input.points);
          for (const key of Object.keys(input)) {
            if ("points" === key || "type" === key) continue;
            delete input[key];
          }
        };
        const $po8 = (input: any): any => {
          if ("object" === typeof input.outer && null !== input.outer)
            $po9(input.outer);
          if (Array.isArray(input.inner)) $pp2(input.inner);
          for (const key of Object.keys(input)) {
            if ("outer" === key || "inner" === key || "type" === key) continue;
            delete input[key];
          }
        };
        const $po9 = (input: any): any => {
          if (Array.isArray(input.points)) $pp1(input.points);
          for (const key of Object.keys(input)) {
            if ("points" === key) continue;
            delete input[key];
          }
        };
        const $po10 = (input: any): any => {
          if ("object" === typeof input.centroid && null !== input.centroid)
            $po4(input.centroid);
          for (const key of Object.keys(input)) {
            if ("centroid" === key || "radius" === key || "type" === key)
              continue;
            delete input[key];
          }
        };
        const $pu0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $po2(input);
            else if ("line" === input.type) return $po3(input);
            else if ("triangle" === input.type) return $po5(input);
            else if ("rectangle" === input.type) return $po6(input);
            else if ("polyline" === input.type) return $po7(input);
            else if ("polygon" === input.type) return $po8(input);
            else if ("circle" === input.type) return $po10(input);
            else
              $throws({
                expected:
                  '(ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle>)',
                value: input,
              });
          })();
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input);
      prune(input);
      return input;
    })(input),
  );
