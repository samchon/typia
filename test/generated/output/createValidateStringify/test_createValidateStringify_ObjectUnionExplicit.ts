import typia from "../../../../src";
import { _test_validateStringify } from "../../../internal/_test_validateStringify";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_createValidateStringify_ObjectUnionExplicit =
    _test_validateStringify(
        "ObjectUnionExplicit",
        ObjectUnionExplicit.generate,
        (input: ObjectUnionExplicit): typia.IValidation<string> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<ObjectUnionExplicit> => {
                const __is: any = (
                    input: any,
                ): input is ObjectUnionExplicit => {
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
                const errors: any = [] as any[];
                const $report: any = (
                    typia.createValidateStringify as any
                ).report(errors);
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionExplicit => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    }),
                                ("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
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
                        const $vo1: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $vo2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $vo2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
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
                        const $vo2: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    }),
                                ("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".y",
                                        expected: "number",
                                        value: input.y,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $vo2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $vo2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p2,
                                    }),
                                ((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p3,
                                    })) &&
                                    $vo2(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
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
                        const $vo4: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $vo2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $vo2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p2,
                                    }),
                                ((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p3,
                                    })) &&
                                    $vo2(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p3,
                                    }),
                                ((("object" === typeof input.p4 &&
                                    null !== input.p4) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p4",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: input.p4,
                                    })) &&
                                    $vo2(
                                        input.p4,
                                        _path + ".p4",
                                        true && _exceptionable,
                                    )) ||
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
                        const $vo5: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.points) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionExplicit.IPoint>",
                                        value: input.points,
                                    })) &&
                                    input.points
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionExplicit.IPoint",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionExplicit.IPoint",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionExplicit.IPoint>",
                                        value: input.points,
                                    }),
                                "polyline" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"polyline"',
                                        value: input.type,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo6: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.outer &&
                                    null !== input.outer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "ObjectUnionExplicit.IPolyline",
                                        value: input.outer,
                                    })) &&
                                    $vo7(
                                        input.outer,
                                        _path + ".outer",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "ObjectUnionExplicit.IPolyline",
                                        value: input.outer,
                                    }),
                                ((Array.isArray(input.inner) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<ObjectUnionExplicit.IPolyline>",
                                        value: input.inner,
                                    })) &&
                                    input.inner
                                        .map(
                                            (elem: any, _index3: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionExplicit.IPolyline",
                                                        value: elem,
                                                    })) &&
                                                    $vo7(
                                                        elem,
                                                        _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionExplicit.IPolyline",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<ObjectUnionExplicit.IPolyline>",
                                        value: input.inner,
                                    }),
                                "polygon" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"polygon"',
                                        value: input.type,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo7: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.points) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionExplicit.IPoint>",
                                        value: input.points,
                                    })) &&
                                    input.points
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".points[" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionExplicit.IPoint",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            ".points[" +
                                                            _index4 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionExplicit.IPoint",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionExplicit.IPoint>",
                                        value: input.points,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo8: any = (
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
                        const $vu0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("point" === input.type)
                                    return $vo0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("line" === input.type)
                                    return $vo1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("triangle" === input.type)
                                    return $vo3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("rectangle" === input.type)
                                    return $vo4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("polyline" === input.type)
                                    return $vo5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("polygon" === input.type)
                                    return $vo6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("circle" === input.type)
                                    return $vo8(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
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
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
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
                const success: any = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify: any = (input: ObjectUnionExplicit): string => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    "number" === typeof input.y &&
                    "point" === input.type;
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io2(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io2(input.p2) &&
                    "line" === input.type;
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.x && "number" === typeof input.y;
                const $io3: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    $io2(input.p1) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    $io2(input.p2) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    $io2(input.p3) &&
                    "triangle" === input.type;
                const $io4: any = (input: any): boolean =>
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
                    $io2(input.p4) &&
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
                    $io2(input.centroid) &&
                    "number" === typeof input.radius &&
                    "circle" === input.type;
                const $number: any = (typia.createValidateStringify as any)
                    .number;
                const $string: any = (typia.createValidateStringify as any)
                    .string;
                const $throws: any = (typia.createValidateStringify as any)
                    .throws;
                const $so0: any = (input: any): any =>
                    `{"x":${$number(input.x)},"y":${$number(
                        input.y,
                    )},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"point"',
                            value: input.type,
                        });
                    })()}}`;
                const $so1: any = (input: any): any =>
                    `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(
                        input.p1.y,
                    )}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(
                        input.p2.y,
                    )}}`},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"line"',
                            value: input.type,
                        });
                    })()}}`;
                const $so3: any = (input: any): any =>
                    `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(
                        input.p1.y,
                    )}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(
                        input.p2.y,
                    )}}`},"p3":${`{"x":${$number(input.p3.x)},"y":${$number(
                        input.p3.y,
                    )}}`},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"triangle"',
                            value: input.type,
                        });
                    })()}}`;
                const $so4: any = (input: any): any =>
                    `{"p1":${`{"x":${$number(input.p1.x)},"y":${$number(
                        input.p1.y,
                    )}}`},"p2":${`{"x":${$number(input.p2.x)},"y":${$number(
                        input.p2.y,
                    )}}`},"p3":${`{"x":${$number(input.p3.x)},"y":${$number(
                        input.p3.y,
                    )}}`},"p4":${`{"x":${$number(input.p4.x)},"y":${$number(
                        input.p4.y,
                    )}}`},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"rectangle"',
                            value: input.type,
                        });
                    })()}}`;
                const $so5: any = (input: any): any =>
                    `{"points":${(() =>
                        `[${input.points
                            .map(
                                (elem: any) =>
                                    `{"x":${$number(elem.x)},"y":${$number(
                                        elem.y,
                                    )}}`,
                            )
                            .join(",")}]`)()},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"polyline"',
                            value: input.type,
                        });
                    })()}}`;
                const $so6: any = (input: any): any =>
                    `{"outer":${$so7(input.outer)},"inner":${(() =>
                        `[${input.inner
                            .map((elem: any) => $so7(elem))
                            .join(",")}]`)()},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"polygon"',
                            value: input.type,
                        });
                    })()}}`;
                const $so7: any = (input: any): any =>
                    `{"points":${(() =>
                        `[${input.points
                            .map(
                                (elem: any) =>
                                    `{"x":${$number(elem.x)},"y":${$number(
                                        elem.y,
                                    )}}`,
                            )
                            .join(",")}]`)()}}`;
                const $so8: any = (input: any): any =>
                    `{"centroid":${`{"x":${$number(
                        input.centroid.x,
                    )},"y":${$number(input.centroid.y)}}`},"radius":${$number(
                        input.radius,
                    )},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"circle"',
                            value: input.type,
                        });
                    })()}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if ("point" === input.type) return $so0(input);
                        if ("line" === input.type) return $so1(input);
                        if ("triangle" === input.type) return $so3(input);
                        if ("rectangle" === input.type) return $so4(input);
                        if ("polyline" === input.type) return $so5(input);
                        if ("polygon" === input.type) return $so6(input);
                        if ("circle" === input.type) return $so8(input);
                        $throws({
                            expected:
                                '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                            value: input,
                        });
                    })();
                return (() =>
                    `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
        ObjectUnionExplicit.SPOILERS,
    );
