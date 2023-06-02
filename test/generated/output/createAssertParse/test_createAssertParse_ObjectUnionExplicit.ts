import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_createAssertParse_ObjectUnionExplicit = _test_assertParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input: string): typia.Primitive<ObjectUnionExplicit> => {
        const assert: any = (input: any): ObjectUnionExplicit => {
            const __is: any = (input: any): input is ObjectUnionExplicit => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    "point" === input.type;
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "line" === input.type;
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y);
                const $io3: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof input.p3.x &&
                    Number.isFinite(input.p3.x) &&
                    "number" === typeof input.p3.y &&
                    Number.isFinite(input.p3.y) &&
                    "triangle" === input.type;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof input.p3.x &&
                    Number.isFinite(input.p3.x) &&
                    "number" === typeof input.p3.y &&
                    Number.isFinite(input.p3.y) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    "number" === typeof input.p4.x &&
                    Number.isFinite(input.p4.x) &&
                    "number" === typeof input.p4.y &&
                    Number.isFinite(input.p4.y) &&
                    "rectangle" === input.type;
                const $io5: any = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    ) &&
                    "polyline" === input.type;
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io7(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io7(elem),
                    ) &&
                    "polygon" === input.type;
                const $io7: any = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io2(elem),
                    );
                const $io8: any = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    "number" === typeof input.centroid.x &&
                    Number.isFinite(input.centroid.x) &&
                    "number" === typeof input.centroid.y &&
                    Number.isFinite(input.centroid.y) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius) &&
                    "circle" === input.type;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("point" === input.type) return $io0(input);
                        if ("line" === input.type) return $io1(input);
                        if ("triangle" === input.type) return $io3(input);
                        if ("rectangle" === input.type) return $io4(input);
                        if ("polyline" === input.type) return $io5(input);
                        if ("polygon" === input.type) return $io6(input);
                        if ("circle" === input.type) return $io8(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const $guard: any = (typia.createAssertParse as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionExplicit => {
                    const $ao0: any = (
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
                    const $ao1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.p1 && null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p1,
                            })) &&
                        $ao2(input.p1, _path + ".p1", true && _exceptionable) &&
                        (("object" === typeof input.p2 && null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p2,
                            })) &&
                        $ao2(input.p2, _path + ".p2", true && _exceptionable) &&
                        ("line" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"line"',
                                value: input.type,
                            }));
                    const $ao2: any = (
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
                    const $ao3: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.p1 && null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p1,
                            })) &&
                        $ao2(input.p1, _path + ".p1", true && _exceptionable) &&
                        (("object" === typeof input.p2 && null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p2,
                            })) &&
                        $ao2(input.p2, _path + ".p2", true && _exceptionable) &&
                        (("object" === typeof input.p3 && null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p3,
                            })) &&
                        $ao2(input.p3, _path + ".p3", true && _exceptionable) &&
                        ("triangle" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"triangle"',
                                value: input.type,
                            }));
                    const $ao4: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.p1 && null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p1,
                            })) &&
                        $ao2(input.p1, _path + ".p1", true && _exceptionable) &&
                        (("object" === typeof input.p2 && null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p2,
                            })) &&
                        $ao2(input.p2, _path + ".p2", true && _exceptionable) &&
                        (("object" === typeof input.p3 && null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p3,
                            })) &&
                        $ao2(input.p3, _path + ".p3", true && _exceptionable) &&
                        (("object" === typeof input.p4 && null !== input.p4) ||
                            $guard(_exceptionable, {
                                path: _path + ".p4",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p4,
                            })) &&
                        $ao2(input.p4, _path + ".p4", true && _exceptionable) &&
                        ("rectangle" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"rectangle"',
                                value: input.type,
                            }));
                    const $ao5: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.points) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionExplicit.IPoint>",
                                value: input.points,
                            })) &&
                        input.points.every(
                            (elem: any, _index2: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index2 + "]",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: elem,
                                    })) &&
                                $ao2(
                                    elem,
                                    _path + ".points[" + _index2 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("polyline" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"polyline"',
                                value: input.type,
                            }));
                    const $ao6: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.outer &&
                            null !== input.outer) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "ObjectUnionExplicit.IPolyline",
                                value: input.outer,
                            })) &&
                        $ao7(
                            input.outer,
                            _path + ".outer",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.inner) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected:
                                    "Array<ObjectUnionExplicit.IPolyline>",
                                value: input.inner,
                            })) &&
                        input.inner.every(
                            (elem: any, _index3: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner[" + _index3 + "]",
                                        expected:
                                            "ObjectUnionExplicit.IPolyline",
                                        value: elem,
                                    })) &&
                                $ao7(
                                    elem,
                                    _path + ".inner[" + _index3 + "]",
                                    true && _exceptionable,
                                ),
                        ) &&
                        ("polygon" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"polygon"',
                                value: input.type,
                            }));
                    const $ao7: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.points) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionExplicit.IPoint>",
                                value: input.points,
                            })) &&
                        input.points.every(
                            (elem: any, _index4: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index4 + "]",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: elem,
                                    })) &&
                                $ao2(
                                    elem,
                                    _path + ".points[" + _index4 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao8: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.centroid &&
                            null !== input.centroid) ||
                            $guard(_exceptionable, {
                                path: _path + ".centroid",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.centroid,
                            })) &&
                        $ao2(
                            input.centroid,
                            _path + ".centroid",
                            true && _exceptionable,
                        ) &&
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
                    const $au0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("point" === input.type)
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("line" === input.type)
                                return $ao1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("triangle" === input.type)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("rectangle" === input.type)
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("polyline" === input.type)
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("polygon" === input.type)
                                return $ao6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("circle" === input.type)
                                return $ao8(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $guard(_exceptionable, {
                                path: _path,
                                expected:
                                    '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                                value: input,
                            });
                        })();
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectUnionExplicit",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                                        value: elem,
                                    })) &&
                                $au0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input) as any;
    },
    ObjectUnionExplicit.SPOILERS,
);
