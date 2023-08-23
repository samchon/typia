import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_misc_assertClone_ObjectUnionExplicitPointer =
    _test_misc_assertClone(
        "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
        ((input: any): typia.Resolved<ObjectUnionExplicitPointer> => {
            const assert = (input: any): ObjectUnionExplicitPointer => {
                const __is = (
                    input: any,
                ): input is ObjectUnionExplicitPointer => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
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
                                "object" === typeof elem &&
                                null !== elem &&
                                $io4(elem),
                        ) &&
                        "polyline" === input.type;
                    const $io8 = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io9(input.outer) &&
                        Array.isArray(input.inner) &&
                        input.inner.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io9(elem),
                        ) &&
                        "polygon" === input.type;
                    const $io9 = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io4(elem),
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
                            else if ("triangle" === input.type)
                                return $io5(input);
                            else if ("rectangle" === input.type)
                                return $io6(input);
                            else if ("polyline" === input.type)
                                return $io7(input);
                            else if ("polygon" === input.type)
                                return $io8(input);
                            else if ("circle" === input.type)
                                return $io10(input);
                            else return false;
                        })();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionExplicitPointer => {
                        const $guard = (typia.misc.assertClone as any).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((Array.isArray(input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<IPointer<ObjectUnionExplicitPointer.Shape>>",
                                    value: input.value,
                                })) &&
                                input.value.every(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "IPointer<ObjectUnionExplicitPointer.Shape>",
                                                value: elem,
                                            })) &&
                                            $ao1(
                                                elem,
                                                _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected:
                                                "IPointer<ObjectUnionExplicitPointer.Shape>",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "Array<IPointer<ObjectUnionExplicitPointer.Shape>>",
                                value: input.value,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ((("object" === typeof input.value &&
                                null !== input.value) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        '(ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle>)',
                                    value: input.value,
                                })) &&
                                $au0(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
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
                            (("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                })) &&
                            (("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
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
                            (((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p1,
                                })) &&
                                $ao4(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p1,
                                })) &&
                            (((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p2,
                                })) &&
                                $ao4(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
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
                            (("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                })) &&
                            (("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
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
                            (((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p1,
                                })) &&
                                $ao4(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p1,
                                })) &&
                            (((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p2,
                                })) &&
                                $ao4(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p2,
                                })) &&
                            (((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p3,
                                })) &&
                                $ao4(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
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
                            (((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p1,
                                })) &&
                                $ao4(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p1,
                                })) &&
                            (((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p2,
                                })) &&
                                $ao4(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p2,
                                })) &&
                            (((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p3,
                                })) &&
                                $ao4(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p3,
                                })) &&
                            (((("object" === typeof input.p4 &&
                                null !== input.p4) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.p4,
                                })) &&
                                $ao4(
                                    input.p4,
                                    _path + ".p4",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
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
                                    expected:
                                        "Array<ObjectUnionExplicitPointer.IPoint>",
                                    value: input.points,
                                })) &&
                                input.points.every(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionExplicitPointer.IPoint",
                                                value: elem,
                                            })) &&
                                            $ao4(
                                                elem,
                                                _path +
                                                    ".points[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".points[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "ObjectUnionExplicitPointer.IPoint",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<ObjectUnionExplicitPointer.IPoint>",
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
                            (((("object" === typeof input.outer &&
                                null !== input.outer) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPolyline",
                                    value: input.outer,
                                })) &&
                                $ao9(
                                    input.outer,
                                    _path + ".outer",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPolyline",
                                    value: input.outer,
                                })) &&
                            (((Array.isArray(input.inner) ||
                                $guard(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "Array<ObjectUnionExplicitPointer.IPolyline>",
                                    value: input.inner,
                                })) &&
                                input.inner.every(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionExplicitPointer.IPolyline",
                                                value: elem,
                                            })) &&
                                            $ao9(
                                                elem,
                                                _path +
                                                    ".inner[" +
                                                    _index3 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".inner[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "ObjectUnionExplicitPointer.IPolyline",
                                            value: elem,
                                        }),
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "Array<ObjectUnionExplicitPointer.IPolyline>",
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
                                    expected:
                                        "Array<ObjectUnionExplicitPointer.IPoint>",
                                    value: input.points,
                                })) &&
                                input.points.every(
                                    (elem: any, _index4: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "ObjectUnionExplicitPointer.IPoint",
                                                value: elem,
                                            })) &&
                                            $ao4(
                                                elem,
                                                _path +
                                                    ".points[" +
                                                    _index4 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".points[" +
                                                _index4 +
                                                "]",
                                            expected:
                                                "ObjectUnionExplicitPointer.IPoint",
                                            value: elem,
                                        }),
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected:
                                    "Array<ObjectUnionExplicitPointer.IPoint>",
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
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
                                    value: input.centroid,
                                })) &&
                                $ao4(
                                    input.centroid,
                                    _path + ".centroid",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".centroid",
                                    expected:
                                        "ObjectUnionExplicitPointer.IPoint",
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
                                    return $ao2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("line" === input.type)
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("triangle" === input.type)
                                    return $ao5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("rectangle" === input.type)
                                    return $ao6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("polyline" === input.type)
                                    return $ao7(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("polygon" === input.type)
                                    return $ao8(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("circle" === input.type)
                                    return $ao10(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
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
            const clone = (
                input: ObjectUnionExplicitPointer,
            ): typia.Resolved<ObjectUnionExplicitPointer> => {
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    ) &&
                    "polyline" === input.type;
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io9(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io9(elem),
                    ) &&
                    "polygon" === input.type;
                const $io9 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
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
                const $throws = (typia.misc.assertClone as any).throws;
                const $cp0 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co1(elem)
                            : (elem as any),
                    );
                const $cp1 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co4(elem)
                            : (elem as any),
                    );
                const $cp2 = (input: any) =>
                    input.map((elem: any) =>
                        "object" === typeof elem && null !== elem
                            ? $co9(elem)
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
                        ? $cp1(input.points)
                        : (input.points as any),
                    type: input.type as any,
                });
                const $co8 = (input: any): any => ({
                    outer:
                        "object" === typeof input.outer && null !== input.outer
                            ? $co9(input.outer)
                            : (input.outer as any),
                    inner: Array.isArray(input.inner)
                        ? $cp2(input.inner)
                        : (input.inner as any),
                    type: input.type as any,
                });
                const $co9 = (input: any): any => ({
                    points: Array.isArray(input.points)
                        ? $cp1(input.points)
                        : (input.points as any),
                });
                const $co10 = (input: any): any => ({
                    centroid:
                        "object" === typeof input.centroid &&
                        null !== input.centroid
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
                                    '(ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle>)',
                                value: input,
                            });
                    })();
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    );
