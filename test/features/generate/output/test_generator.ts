import typia from "../../../../src";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

/* -----------------------------------------------------------
    VALIDATORS
----------------------------------------------------------- */
/**
 * Transformed {@link createAssert} function
 */
export const generate_assert = (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((
        input: any,
        path: string,
        exceptionable: boolean,
    ): input is ObjectUnionExplicit => {
        const $ao0 = (input: any, path: string, exceptionable: boolean) =>
            ("number" === typeof input.x ||
                $guard(exceptionable, {
                    path: path + ".x",
                    expected: "number",
                    value: input.x,
                })) &&
            ("number" === typeof input.y ||
                $guard(exceptionable, {
                    path: path + ".y",
                    expected: "number",
                    value: input.y,
                })) &&
            ("point" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"point"',
                    value: input.type,
                }));
        const $ao1 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.p1 && null !== input.p1) ||
                $guard(exceptionable, {
                    path: path + ".p1",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p1,
                })) &&
            $ao2(input.p1, path + ".p1", true && exceptionable) &&
            (("object" === typeof input.p2 && null !== input.p2) ||
                $guard(exceptionable, {
                    path: path + ".p2",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p2,
                })) &&
            $ao2(input.p2, path + ".p2", true && exceptionable) &&
            ("line" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"line"',
                    value: input.type,
                }));
        const $ao2 = (input: any, path: string, exceptionable: boolean) =>
            ("number" === typeof input.x ||
                $guard(exceptionable, {
                    path: path + ".x",
                    expected: "number",
                    value: input.x,
                })) &&
            ("number" === typeof input.y ||
                $guard(exceptionable, {
                    path: path + ".y",
                    expected: "number",
                    value: input.y,
                }));
        const $ao3 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.p1 && null !== input.p1) ||
                $guard(exceptionable, {
                    path: path + ".p1",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p1,
                })) &&
            $ao2(input.p1, path + ".p1", true && exceptionable) &&
            (("object" === typeof input.p2 && null !== input.p2) ||
                $guard(exceptionable, {
                    path: path + ".p2",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p2,
                })) &&
            $ao2(input.p2, path + ".p2", true && exceptionable) &&
            (("object" === typeof input.p3 && null !== input.p3) ||
                $guard(exceptionable, {
                    path: path + ".p3",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p3,
                })) &&
            $ao2(input.p3, path + ".p3", true && exceptionable) &&
            ("triangle" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"triangle"',
                    value: input.type,
                }));
        const $ao4 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.p1 && null !== input.p1) ||
                $guard(exceptionable, {
                    path: path + ".p1",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p1,
                })) &&
            $ao2(input.p1, path + ".p1", true && exceptionable) &&
            (("object" === typeof input.p2 && null !== input.p2) ||
                $guard(exceptionable, {
                    path: path + ".p2",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p2,
                })) &&
            $ao2(input.p2, path + ".p2", true && exceptionable) &&
            (("object" === typeof input.p3 && null !== input.p3) ||
                $guard(exceptionable, {
                    path: path + ".p3",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p3,
                })) &&
            $ao2(input.p3, path + ".p3", true && exceptionable) &&
            (("object" === typeof input.p4 && null !== input.p4) ||
                $guard(exceptionable, {
                    path: path + ".p4",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p4,
                })) &&
            $ao2(input.p4, path + ".p4", true && exceptionable) &&
            ("rectangle" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"rectangle"',
                    value: input.type,
                }));
        const $ao5 = (input: any, path: string, exceptionable: boolean) =>
            (Array.isArray(input.points) ||
                $guard(exceptionable, {
                    path: path + ".points",
                    expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                    value: input.points,
                })) &&
            input.points.every(
                (elem: any, index2: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(exceptionable, {
                            path: path + ".points[" + index2 + "]",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: elem,
                        })) &&
                    $ao2(
                        elem,
                        path + ".points[" + index2 + "]",
                        true && exceptionable,
                    ),
            ) &&
            ("polyline" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"polyline"',
                    value: input.type,
                }));
        const $ao6 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.outer && null !== input.outer) ||
                $guard(exceptionable, {
                    path: path + ".outer",
                    expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                    value: input.outer,
                })) &&
            $ao7(input.outer, path + ".outer", true && exceptionable) &&
            (Array.isArray(input.inner) ||
                $guard(exceptionable, {
                    path: path + ".inner",
                    expected: "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                    value: input.inner,
                })) &&
            input.inner.every(
                (elem: any, index3: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(exceptionable, {
                            path: path + ".inner[" + index3 + "]",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: elem,
                        })) &&
                    $ao7(
                        elem,
                        path + ".inner[" + index3 + "]",
                        true && exceptionable,
                    ),
            ) &&
            ("polygon" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"polygon"',
                    value: input.type,
                }));
        const $ao7 = (input: any, path: string, exceptionable: boolean) =>
            (Array.isArray(input.points) ||
                $guard(exceptionable, {
                    path: path + ".points",
                    expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                    value: input.points,
                })) &&
            input.points.every(
                (elem: any, index4: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(exceptionable, {
                            path: path + ".points[" + index4 + "]",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: elem,
                        })) &&
                    $ao2(
                        elem,
                        path + ".points[" + index4 + "]",
                        true && exceptionable,
                    ),
            );
        const $ao8 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.centroid && null !== input.centroid) ||
                $guard(exceptionable, {
                    path: path + ".centroid",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.centroid,
                })) &&
            $ao2(input.centroid, path + ".centroid", true && exceptionable) &&
            ("number" === typeof input.radius ||
                $guard(exceptionable, {
                    path: path + ".radius",
                    expected: "number",
                    value: input.radius,
                })) &&
            ("circle" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"circle"',
                    value: input.type,
                }));
        const $au0 = (input: any, path: string, exceptionable: boolean) =>
            (() => {
                if ("point" === input.type)
                    return $ao0(input, path, true && exceptionable);
                if ("line" === input.type)
                    return $ao1(input, path, true && exceptionable);
                if ("triangle" === input.type)
                    return $ao3(input, path, true && exceptionable);
                if ("rectangle" === input.type)
                    return $ao4(input, path, true && exceptionable);
                if ("polyline" === input.type)
                    return $ao5(input, path, true && exceptionable);
                if ("polygon" === input.type)
                    return $ao6(input, path, true && exceptionable);
                if ("circle" === input.type)
                    return $ao8(input, path, true && exceptionable);
                return $guard(exceptionable, {
                    path: path,
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return (
            (Array.isArray(input) ||
                $guard(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })) &&
            input.every(
                (elem: any, index1: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(true, {
                            path: path + "[" + index1 + "]",
                            expected:
                                '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                            value: elem,
                        })) &&
                    $au0(elem, path + "[" + index1 + "]", true),
            )
        );
    })(input, "$input", true);
    return input as ObjectUnionExplicit;
};
/**
 * Transformed {@link createIs} function
 */
export const generate_is = (input: any): input is ObjectUnionExplicit => {
    const $io0 = (input: any) =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type;
    const $io1 = (input: any) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        "number" === typeof input.p1.x &&
        "number" === typeof input.p1.y &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        "number" === typeof input.p2.x &&
        "number" === typeof input.p2.y &&
        "line" === input.type;
    const $io2 = (input: any) =>
        "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        "number" === typeof input.p1.x &&
        "number" === typeof input.p1.y &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        "number" === typeof input.p2.x &&
        "number" === typeof input.p2.y &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        "number" === typeof input.p3.x &&
        "number" === typeof input.p3.y &&
        "triangle" === input.type;
    const $io4 = (input: any) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        "number" === typeof input.p1.x &&
        "number" === typeof input.p1.y &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        "number" === typeof input.p2.x &&
        "number" === typeof input.p2.y &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        "number" === typeof input.p3.x &&
        "number" === typeof input.p3.y &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        "number" === typeof input.p4.x &&
        "number" === typeof input.p4.y &&
        "rectangle" === input.type;
    const $io5 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        ) &&
        "polyline" === input.type;
    const $io6 = (input: any) =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io7(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io7(elem),
        ) &&
        "polygon" === input.type;
    const $io7 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        );
    const $io8 = (input: any) =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        "number" === typeof input.centroid.x &&
        "number" === typeof input.centroid.y &&
        "number" === typeof input.radius &&
        "circle" === input.type;
    const $iu0 = (input: any) =>
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
                "object" === typeof elem && null !== elem && $iu0(elem),
        )
    );
};
/**
 * Transformed {@link createValidate} function
 */
export const generate_validate = (
    input: any,
): typia.IValidation<ObjectUnionExplicit> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    ((
        input: any,
        path: string,
        exceptionable: boolean,
    ): input is ObjectUnionExplicit => {
        const $vo0 = (input: any, path: string, exceptionable: boolean) =>
            [
                "number" === typeof input.x ||
                    $report(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    }),
                "number" === typeof input.y ||
                    $report(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }),
                "point" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vo1 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                    $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                    $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    }),
                "line" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vo2 = (input: any, path: string, exceptionable: boolean) =>
            [
                "number" === typeof input.x ||
                    $report(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    }),
                "number" === typeof input.y ||
                    $report(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }),
            ].every((flag: boolean) => flag);
        const $vo3 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                    $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                    $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                    $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    }),
                "triangle" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vo4 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                    $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                    $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                    $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    }),
                ((("object" === typeof input.p4 && null !== input.p4) ||
                    $report(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                    $vo2(input.p4, path + ".p4", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    }),
                "rectangle" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vo5 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((Array.isArray(input.points) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                    input.points
                        .map(
                            (elem: any, index2: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index2 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    })) &&
                                    $vo2(
                                        elem,
                                        path + ".points[" + index2 + "]",
                                        true && exceptionable,
                                    )) ||
                                $report(exceptionable, {
                                    path: path + ".points[" + index2 + "]",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    }),
                "polyline" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vo6 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.outer && null !== input.outer) ||
                    $report(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                    $vo7(
                        input.outer,
                        path + ".outer",
                        true && exceptionable,
                    )) ||
                    $report(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    }),
                ((Array.isArray(input.inner) ||
                    $report(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                    input.inner
                        .map(
                            (elem: any, index3: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(exceptionable, {
                                        path: path + ".inner[" + index3 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPolyline>",
                                        value: elem,
                                    })) &&
                                    $vo7(
                                        elem,
                                        path + ".inner[" + index3 + "]",
                                        true && exceptionable,
                                    )) ||
                                $report(exceptionable, {
                                    path: path + ".inner[" + index3 + "]",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPolyline>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    }),
                "polygon" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vo7 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((Array.isArray(input.points) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                    input.points
                        .map(
                            (elem: any, index4: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index4 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    })) &&
                                    $vo2(
                                        elem,
                                        path + ".points[" + index4 + "]",
                                        true && exceptionable,
                                    )) ||
                                $report(exceptionable, {
                                    path: path + ".points[" + index4 + "]",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    }),
            ].every((flag: boolean) => flag);
        const $vo8 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $report(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                    $vo2(
                        input.centroid,
                        path + ".centroid",
                        true && exceptionable,
                    )) ||
                    $report(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    }),
                "number" === typeof input.radius ||
                    $report(exceptionable, {
                        path: path + ".radius",
                        expected: "number",
                        value: input.radius,
                    }),
                "circle" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }),
            ].every((flag: boolean) => flag);
        const $vu0 = (input: any, path: string, exceptionable: boolean) =>
            (() => {
                if ("point" === input.type)
                    return $vo0(input, path, true && exceptionable);
                if ("line" === input.type)
                    return $vo1(input, path, true && exceptionable);
                if ("triangle" === input.type)
                    return $vo3(input, path, true && exceptionable);
                if ("rectangle" === input.type)
                    return $vo4(input, path, true && exceptionable);
                if ("polyline" === input.type)
                    return $vo5(input, path, true && exceptionable);
                if ("polygon" === input.type)
                    return $vo6(input, path, true && exceptionable);
                if ("circle" === input.type)
                    return $vo8(input, path, true && exceptionable);
                return $report(exceptionable, {
                    path: path,
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return (
            ((Array.isArray(input) ||
                $report(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })) &&
                input
                    .map(
                        (elem: any, index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                                $report(true, {
                                    path: path + "[" + index1 + "]",
                                    expected:
                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                    value: elem,
                                })) &&
                                $vu0(elem, path + "[" + index1 + "]", true)) ||
                            $report(true, {
                                path: path + "[" + index1 + "]",
                                expected:
                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                value: elem,
                            }),
                    )
                    .every((flag: boolean) => flag)) ||
            $report(true, {
                path: path + "",
                expected:
                    'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                value: input,
            })
        );
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined,
    } as typia.IValidation<ObjectUnionExplicit>;
};
/**
 * Transformed {@link createAssertEquals} function
 */
export const generate_assert_equals = (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((
        input: any,
        path: string,
        exceptionable: boolean,
    ): input is ObjectUnionExplicit => {
        const $ao0 = (input: any, path: string, exceptionable: boolean) =>
            ("number" === typeof input.x ||
                $guard(exceptionable, {
                    path: path + ".x",
                    expected: "number",
                    value: input.x,
                })) &&
            ("number" === typeof input.y ||
                $guard(exceptionable, {
                    path: path + ".y",
                    expected: "number",
                    value: input.y,
                })) &&
            ("point" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"point"',
                    value: input.type,
                })) &&
            (3 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["x", "y", "type"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao1 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.p1 && null !== input.p1) ||
                $guard(exceptionable, {
                    path: path + ".p1",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p1,
                })) &&
            $ao2(input.p1, path + ".p1", true && exceptionable) &&
            (("object" === typeof input.p2 && null !== input.p2) ||
                $guard(exceptionable, {
                    path: path + ".p2",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p2,
                })) &&
            $ao2(input.p2, path + ".p2", true && exceptionable) &&
            ("line" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"line"',
                    value: input.type,
                })) &&
            (3 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["p1", "p2", "type"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao2 = (input: any, path: string, exceptionable: boolean) =>
            ("number" === typeof input.x ||
                $guard(exceptionable, {
                    path: path + ".x",
                    expected: "number",
                    value: input.x,
                })) &&
            ("number" === typeof input.y ||
                $guard(exceptionable, {
                    path: path + ".y",
                    expected: "number",
                    value: input.y,
                })) &&
            (2 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["x", "y"].some((prop) => key === prop)) return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao3 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.p1 && null !== input.p1) ||
                $guard(exceptionable, {
                    path: path + ".p1",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p1,
                })) &&
            $ao2(input.p1, path + ".p1", true && exceptionable) &&
            (("object" === typeof input.p2 && null !== input.p2) ||
                $guard(exceptionable, {
                    path: path + ".p2",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p2,
                })) &&
            $ao2(input.p2, path + ".p2", true && exceptionable) &&
            (("object" === typeof input.p3 && null !== input.p3) ||
                $guard(exceptionable, {
                    path: path + ".p3",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p3,
                })) &&
            $ao2(input.p3, path + ".p3", true && exceptionable) &&
            ("triangle" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"triangle"',
                    value: input.type,
                })) &&
            (4 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["p1", "p2", "p3", "type"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao4 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.p1 && null !== input.p1) ||
                $guard(exceptionable, {
                    path: path + ".p1",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p1,
                })) &&
            $ao2(input.p1, path + ".p1", true && exceptionable) &&
            (("object" === typeof input.p2 && null !== input.p2) ||
                $guard(exceptionable, {
                    path: path + ".p2",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p2,
                })) &&
            $ao2(input.p2, path + ".p2", true && exceptionable) &&
            (("object" === typeof input.p3 && null !== input.p3) ||
                $guard(exceptionable, {
                    path: path + ".p3",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p3,
                })) &&
            $ao2(input.p3, path + ".p3", true && exceptionable) &&
            (("object" === typeof input.p4 && null !== input.p4) ||
                $guard(exceptionable, {
                    path: path + ".p4",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.p4,
                })) &&
            $ao2(input.p4, path + ".p4", true && exceptionable) &&
            ("rectangle" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"rectangle"',
                    value: input.type,
                })) &&
            (5 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (
                        ["p1", "p2", "p3", "p4", "type"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao5 = (input: any, path: string, exceptionable: boolean) =>
            (Array.isArray(input.points) ||
                $guard(exceptionable, {
                    path: path + ".points",
                    expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                    value: input.points,
                })) &&
            input.points.every(
                (elem: any, index2: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(exceptionable, {
                            path: path + ".points[" + index2 + "]",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: elem,
                        })) &&
                    $ao2(
                        elem,
                        path + ".points[" + index2 + "]",
                        true && exceptionable,
                    ),
            ) &&
            ("polyline" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"polyline"',
                    value: input.type,
                })) &&
            (2 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["points", "type"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao6 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.outer && null !== input.outer) ||
                $guard(exceptionable, {
                    path: path + ".outer",
                    expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                    value: input.outer,
                })) &&
            $ao7(input.outer, path + ".outer", true && exceptionable) &&
            (Array.isArray(input.inner) ||
                $guard(exceptionable, {
                    path: path + ".inner",
                    expected: "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                    value: input.inner,
                })) &&
            input.inner.every(
                (elem: any, index3: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(exceptionable, {
                            path: path + ".inner[" + index3 + "]",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: elem,
                        })) &&
                    $ao7(
                        elem,
                        path + ".inner[" + index3 + "]",
                        true && exceptionable,
                    ),
            ) &&
            ("polygon" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"polygon"',
                    value: input.type,
                })) &&
            (3 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["outer", "inner", "type"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao7 = (input: any, path: string, exceptionable: boolean) =>
            (Array.isArray(input.points) ||
                $guard(exceptionable, {
                    path: path + ".points",
                    expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                    value: input.points,
                })) &&
            input.points.every(
                (elem: any, index4: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(exceptionable, {
                            path: path + ".points[" + index4 + "]",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: elem,
                        })) &&
                    $ao2(
                        elem,
                        path + ".points[" + index4 + "]",
                        true && exceptionable,
                    ),
            ) &&
            (1 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (["points"].some((prop) => key === prop)) return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $ao8 = (input: any, path: string, exceptionable: boolean) =>
            (("object" === typeof input.centroid && null !== input.centroid) ||
                $guard(exceptionable, {
                    path: path + ".centroid",
                    expected: "Resolve<ObjectUnionExplicit.IPoint>",
                    value: input.centroid,
                })) &&
            $ao2(input.centroid, path + ".centroid", true && exceptionable) &&
            ("number" === typeof input.radius ||
                $guard(exceptionable, {
                    path: path + ".radius",
                    expected: "number",
                    value: input.radius,
                })) &&
            ("circle" === input.type ||
                $guard(exceptionable, {
                    path: path + ".type",
                    expected: '"circle"',
                    value: input.type,
                })) &&
            (3 === Object.keys(input).length ||
                false === exceptionable ||
                Object.keys(input).every((key) => {
                    if (
                        ["centroid", "radius", "type"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(exceptionable, {
                        path: path + $join(key),
                        expected: "undefined",
                        value: value,
                    });
                }));
        const $au0 = (input: any, path: string, exceptionable: boolean) =>
            (() => {
                if ("point" === input.type)
                    return $ao0(input, path, true && exceptionable);
                if ("line" === input.type)
                    return $ao1(input, path, true && exceptionable);
                if ("triangle" === input.type)
                    return $ao3(input, path, true && exceptionable);
                if ("rectangle" === input.type)
                    return $ao4(input, path, true && exceptionable);
                if ("polyline" === input.type)
                    return $ao5(input, path, true && exceptionable);
                if ("polygon" === input.type)
                    return $ao6(input, path, true && exceptionable);
                if ("circle" === input.type)
                    return $ao8(input, path, true && exceptionable);
                return $guard(exceptionable, {
                    path: path,
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return (
            (Array.isArray(input) ||
                $guard(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })) &&
            input.every(
                (elem: any, index1: number) =>
                    (("object" === typeof elem && null !== elem) ||
                        $guard(true, {
                            path: path + "[" + index1 + "]",
                            expected:
                                '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                            value: elem,
                        })) &&
                    $au0(elem, path + "[" + index1 + "]", true),
            )
        );
    })(input, "$input", true);
    return input as ObjectUnionExplicit;
};
/**
 * Transformed {@link createIsEquals} function
 */
export const generate_equals = (
    input: any,
    exceptionable: boolean,
): input is ObjectUnionExplicit => {
    const $io0 = (input: any, exceptionable: boolean) =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type &&
        (3 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["x", "y", "type"].some((prop) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io1 = (input: any, exceptionable: boolean) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1, true && exceptionable) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2, true && exceptionable) &&
        "line" === input.type &&
        (3 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["p1", "p2", "type"].some((prop) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io2 = (input: any, exceptionable: boolean) =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        (2 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["x", "y"].some((prop) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io3 = (input: any, exceptionable: boolean) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1, true && exceptionable) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2, true && exceptionable) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io2(input.p3, true && exceptionable) &&
        "triangle" === input.type &&
        (4 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["p1", "p2", "p3", "type"].some((prop) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io4 = (input: any, exceptionable: boolean) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1, true && exceptionable) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2, true && exceptionable) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io2(input.p3, true && exceptionable) &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        $io2(input.p4, true && exceptionable) &&
        "rectangle" === input.type &&
        (5 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (
                    ["p1", "p2", "p3", "p4", "type"].some(
                        (prop) => key === prop,
                    )
                )
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io5 = (input: any, exceptionable: boolean) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any, index2: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io2(elem, true && exceptionable),
        ) &&
        "polyline" === input.type &&
        (2 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["points", "type"].some((prop) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io6 = (input: any, exceptionable: boolean) =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io7(input.outer, true && exceptionable) &&
        Array.isArray(input.inner) &&
        input.inner.every(
            (elem: any, index3: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io7(elem, true && exceptionable),
        ) &&
        "polygon" === input.type &&
        (3 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["outer", "inner", "type"].some((prop) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io7 = (input: any, exceptionable: boolean) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any, index4: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io2(elem, true && exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["points"].some((prop) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $io8 = (input: any, exceptionable: boolean) =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io2(input.centroid, true && exceptionable) &&
        "number" === typeof input.radius &&
        "circle" === input.type &&
        (3 === Object.keys(input).length ||
            Object.keys(input).every((key) => {
                if (["centroid", "radius", "type"].some((prop) => key === prop))
                    return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
            }));
    const $iu0 = (input: any, exceptionable: boolean) =>
        (() => {
            if ("point" === input.type)
                return $io0(input, true && exceptionable);
            if ("line" === input.type)
                return $io1(input, true && exceptionable);
            if ("triangle" === input.type)
                return $io3(input, true && exceptionable);
            if ("rectangle" === input.type)
                return $io4(input, true && exceptionable);
            if ("polyline" === input.type)
                return $io5(input, true && exceptionable);
            if ("polygon" === input.type)
                return $io6(input, true && exceptionable);
            if ("circle" === input.type)
                return $io8(input, true && exceptionable);
            return false;
        })();
    return (
        Array.isArray(input) &&
        input.every(
            (elem: any, index1: number) =>
                "object" === typeof elem && null !== elem && $iu0(elem, true),
        )
    );
};
/**
 * Transformed {@link createValidateEquals} function
 */
export const generate_validate_equals = (
    input: any,
): typia.IValidation<ObjectUnionExplicit> => {
    const errors = [] as any[];
    const $report = (typia.createValidateEquals as any).report(errors);
    const $join = (typia.createValidateEquals as any).join;
    ((
        input: any,
        path: string,
        exceptionable: boolean,
    ): input is ObjectUnionExplicit => {
        const $vo0 = (input: any, path: string, exceptionable: boolean) =>
            [
                "number" === typeof input.x ||
                    $report(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    }),
                "number" === typeof input.y ||
                    $report(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }),
                "point" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }),
                3 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (["x", "y", "type"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo1 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                    $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                    $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    }),
                "line" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }),
                3 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["p1", "p2", "type"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo2 = (input: any, path: string, exceptionable: boolean) =>
            [
                "number" === typeof input.x ||
                    $report(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    }),
                "number" === typeof input.y ||
                    $report(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }),
                2 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (["x", "y"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo3 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                    $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                    $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                    $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    }),
                "triangle" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }),
                4 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["p1", "p2", "p3", "type"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo4 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.p1 && null !== input.p1) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                    $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    }),
                ((("object" === typeof input.p2 && null !== input.p2) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                    $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    }),
                ((("object" === typeof input.p3 && null !== input.p3) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                    $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    }),
                ((("object" === typeof input.p4 && null !== input.p4) ||
                    $report(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                    $vo2(input.p4, path + ".p4", true && exceptionable)) ||
                    $report(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    }),
                "rectangle" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }),
                5 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["p1", "p2", "p3", "p4", "type"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo5 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((Array.isArray(input.points) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                    input.points
                        .map(
                            (elem: any, index2: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index2 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    })) &&
                                    $vo2(
                                        elem,
                                        path + ".points[" + index2 + "]",
                                        true && exceptionable,
                                    )) ||
                                $report(exceptionable, {
                                    path: path + ".points[" + index2 + "]",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    }),
                "polyline" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }),
                2 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (["points", "type"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo6 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.outer && null !== input.outer) ||
                    $report(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                    $vo7(
                        input.outer,
                        path + ".outer",
                        true && exceptionable,
                    )) ||
                    $report(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    }),
                ((Array.isArray(input.inner) ||
                    $report(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                    input.inner
                        .map(
                            (elem: any, index3: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(exceptionable, {
                                        path: path + ".inner[" + index3 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPolyline>",
                                        value: elem,
                                    })) &&
                                    $vo7(
                                        elem,
                                        path + ".inner[" + index3 + "]",
                                        true && exceptionable,
                                    )) ||
                                $report(exceptionable, {
                                    path: path + ".inner[" + index3 + "]",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPolyline>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    }),
                "polygon" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }),
                3 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["outer", "inner", "type"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo7 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((Array.isArray(input.points) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                    input.points
                        .map(
                            (elem: any, index4: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index4 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    })) &&
                                    $vo2(
                                        elem,
                                        path + ".points[" + index4 + "]",
                                        true && exceptionable,
                                    )) ||
                                $report(exceptionable, {
                                    path: path + ".points[" + index4 + "]",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                    $report(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    }),
                1 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (["points"].some((prop) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vo8 = (input: any, path: string, exceptionable: boolean) =>
            [
                ((("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $report(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                    $vo2(
                        input.centroid,
                        path + ".centroid",
                        true && exceptionable,
                    )) ||
                    $report(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    }),
                "number" === typeof input.radius ||
                    $report(exceptionable, {
                        path: path + ".radius",
                        expected: "number",
                        value: input.radius,
                    }),
                "circle" === input.type ||
                    $report(exceptionable, {
                        path: path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }),
                3 === Object.keys(input).length ||
                    false === exceptionable ||
                    Object.keys(input)
                        .map((key) => {
                            if (
                                ["centroid", "radius", "type"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $report(exceptionable, {
                                path: path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        })
                        .every((flag: boolean) => flag),
            ].every((flag: boolean) => flag);
        const $vu0 = (input: any, path: string, exceptionable: boolean) =>
            (() => {
                if ("point" === input.type)
                    return $vo0(input, path, true && exceptionable);
                if ("line" === input.type)
                    return $vo1(input, path, true && exceptionable);
                if ("triangle" === input.type)
                    return $vo3(input, path, true && exceptionable);
                if ("rectangle" === input.type)
                    return $vo4(input, path, true && exceptionable);
                if ("polyline" === input.type)
                    return $vo5(input, path, true && exceptionable);
                if ("polygon" === input.type)
                    return $vo6(input, path, true && exceptionable);
                if ("circle" === input.type)
                    return $vo8(input, path, true && exceptionable);
                return $report(exceptionable, {
                    path: path,
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return (
            ((Array.isArray(input) ||
                $report(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })) &&
                input
                    .map(
                        (elem: any, index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                                $report(true, {
                                    path: path + "[" + index1 + "]",
                                    expected:
                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                    value: elem,
                                })) &&
                                $vu0(elem, path + "[" + index1 + "]", true)) ||
                            $report(true, {
                                path: path + "[" + index1 + "]",
                                expected:
                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                value: elem,
                            }),
                    )
                    .every((flag: boolean) => flag)) ||
            $report(true, {
                path: path + "",
                expected:
                    'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                value: input,
            })
        );
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined,
    } as typia.IValidation<ObjectUnionExplicit>;
};
/* -----------------------------------------------------------
    JSON FUNCTIONS
----------------------------------------------------------- */
/**
 * Transformed {@link application} (ajv) function
 */
export const generate_ajv_application = {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_",
                    },
                    {
                        $ref: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_",
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_",
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["point"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_",
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p2: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["line"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.IPoint": {
                $id: "components#/schemas/ObjectUnionExplicit.IPoint",
                type: "object",
                properties: {
                    x: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    y: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["x", "y"],
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_",
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p2: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p3: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["triangle"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_",
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p2: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p3: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p4: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["rectangle"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "p4", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_",
                    type: "object",
                    properties: {
                        points: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["polyline"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["points", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_",
                    type: "object",
                    properties: {
                        outer: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPolyline",
                            "x-typia-required": true,
                        },
                        inner: {
                            type: "array",
                            items: {
                                $ref: "components#/schemas/ObjectUnionExplicit.IPolyline",
                                "x-typia-required": true,
                            },
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["polygon"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["outer", "inner", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.IPolyline": {
                $id: "components#/schemas/ObjectUnionExplicit.IPolyline",
                type: "object",
                properties: {
                    points: {
                        type: "array",
                        items: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["points"],
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_":
                {
                    $id: "components#/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_",
                    type: "object",
                    properties: {
                        centroid: {
                            $ref: "components#/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        radius: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["circle"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["centroid", "radius", "type"],
                    "x-typia-jsDocTags": [],
                },
        },
    },
    purpose: "ajv",
    prefix: "components#/schemas",
};
/**
 * Transformed {@link application} (swagger) function
 */
export const generate_swagger_application = {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_",
                    },
                ],
            },
            nullable: false,
        },
    ],
    components: {
        schemas: {
            "ObjectUnionExplicit.Discriminator_lt__doublequote_point_doublequote__comma__space_ObjectUnionExplicit.IPoint_gt_":
                {
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["point"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_line_doublequote__comma__space_ObjectUnionExplicit.ILine_gt_":
                {
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p2: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["line"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.IPoint": {
                type: "object",
                properties: {
                    x: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true,
                    },
                    y: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["x", "y"],
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_triangle_doublequote__comma__space_ObjectUnionExplicit.ITriangle_gt_":
                {
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p2: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p3: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["triangle"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_rectangle_doublequote__comma__space_ObjectUnionExplicit.IRectangle_gt_":
                {
                    type: "object",
                    properties: {
                        p1: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p2: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p3: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        p4: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["rectangle"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["p1", "p2", "p3", "p4", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_polyline_doublequote__comma__space_ObjectUnionExplicit.IPolyline_gt_":
                {
                    type: "object",
                    properties: {
                        points: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                                "x-typia-required": true,
                            },
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["polyline"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["points", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_polygon_doublequote__comma__space_ObjectUnionExplicit.IPolygon_gt_":
                {
                    type: "object",
                    properties: {
                        outer: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                            "x-typia-required": true,
                        },
                        inner: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectUnionExplicit.IPolyline",
                                "x-typia-required": true,
                            },
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["polygon"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["outer", "inner", "type"],
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionExplicit.IPolyline": {
                type: "object",
                properties: {
                    points: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        nullable: false,
                        "x-typia-required": true,
                    },
                },
                nullable: false,
                required: ["points"],
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionExplicit.Discriminator_lt__doublequote_circle_doublequote__comma__space_ObjectUnionExplicit.ICircle_gt_":
                {
                    type: "object",
                    properties: {
                        centroid: {
                            $ref: "#/components/schemas/ObjectUnionExplicit.IPoint",
                            "x-typia-required": true,
                        },
                        radius: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        type: {
                            type: "string",
                            enum: ["circle"],
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["centroid", "radius", "type"],
                    "x-typia-jsDocTags": [],
                },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
};
/**
 * Transformed {@link createAssertParse} function
 */
export const generate_assert_parse = (
    input: string,
): typia.Primitive<ObjectUnionExplicit> => {
    const assert = (input: any) => {
        const $guard = (typia.createAssertParse as any).guard;
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $ao0 = (input: any, path: string, exceptionable: boolean) =>
                ("number" === typeof input.x ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                ("number" === typeof input.y ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                ("point" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }));
            const $ao1 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                ("line" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }));
            const $ao2 = (input: any, path: string, exceptionable: boolean) =>
                ("number" === typeof input.x ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                ("number" === typeof input.y ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }));
            const $ao3 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                ("triangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }));
            const $ao4 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                (("object" === typeof input.p4 && null !== input.p4) ||
                    $guard(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                $ao2(input.p4, path + ".p4", true && exceptionable) &&
                ("rectangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }));
            const $ao5 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index2 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index2 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polyline" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }));
            const $ao6 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.outer && null !== input.outer) ||
                    $guard(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                $ao7(input.outer, path + ".outer", true && exceptionable) &&
                (Array.isArray(input.inner) ||
                    $guard(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                input.inner.every(
                    (elem: any, index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".inner[" + index3 + "]",
                                expected:
                                    "Resolve<ObjectUnionExplicit.IPolyline>",
                                value: elem,
                            })) &&
                        $ao7(
                            elem,
                            path + ".inner[" + index3 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polygon" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }));
            const $ao7 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index4: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index4 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index4 + "]",
                            true && exceptionable,
                        ),
                );
            const $ao8 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $guard(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                $ao2(
                    input.centroid,
                    path + ".centroid",
                    true && exceptionable,
                ) &&
                ("number" === typeof input.radius ||
                    $guard(exceptionable, {
                        path: path + ".radius",
                        expected: "number",
                        value: input.radius,
                    })) &&
                ("circle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }));
            const $au0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $ao0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $ao1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $ao3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $ao4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $ao5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $ao6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $ao8(input, path, true && exceptionable);
                    return $guard(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                input.every(
                    (elem: any, index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: path + "[" + index1 + "]",
                                expected:
                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                value: elem,
                            })) &&
                        $au0(elem, path + "[" + index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input as ObjectUnionExplicit;
    };
    input = JSON.parse(input);
    return assert(input);
};
/**
 * Transformed {@link createIsParse} function
 */
export const generate_is_parse = (
    input: any,
): typia.Primitive<ObjectUnionExplicit> => {
    const is = (input: any): input is ObjectUnionExplicit => {
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            "number" === typeof input.p3.y &&
            "triangle" === input.type;
        const $io4 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            "number" === typeof input.p3.y &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            "number" === typeof input.p4.x &&
            "number" === typeof input.p4.y &&
            "rectangle" === input.type;
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            "number" === typeof input.centroid.x &&
            "number" === typeof input.centroid.y &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
                    "object" === typeof elem && null !== elem && $iu0(elem),
            )
        );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
};
/**
 * Transformed {@link createValidateParse} function
 */
export const generate_validate_parse = (
    input: string,
): typia.IValidation<typia.Primitive<ObjectUnionExplicit>> => {
    const validate = (input: any): typia.IValidation<ObjectUnionExplicit> => {
        const errors = [] as any[];
        const $report = (typia.createValidateParse as any).report(errors);
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $vo0 = (input: any, path: string, exceptionable: boolean) =>
                [
                    "number" === typeof input.x ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    "number" === typeof input.y ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                    "point" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"point"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    "line" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"line"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (input: any, path: string, exceptionable: boolean) =>
                [
                    "number" === typeof input.x ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    "number" === typeof input.y ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    "triangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"triangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo4 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    ((("object" === typeof input.p4 && null !== input.p4) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        })) &&
                        $vo2(input.p4, path + ".p4", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        }),
                    "rectangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"rectangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo5 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index2 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index2 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                    "polyline" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polyline"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo6 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.outer &&
                        null !== input.outer) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        })) &&
                        $vo7(
                            input.outer,
                            path + ".outer",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        }),
                    ((Array.isArray(input.inner) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        })) &&
                        input.inner
                            .map(
                                (elem: any, index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path + ".inner[" + index3 + "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPolyline>",
                                            value: elem,
                                        })) &&
                                        $vo7(
                                            elem,
                                            path + ".inner[" + index3 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".inner[" + index3 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPolyline>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        }),
                    "polygon" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polygon"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo7 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index4 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index4 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index4 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                ].every((flag: boolean) => flag);
            const $vo8 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.centroid &&
                        null !== input.centroid) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        })) &&
                        $vo2(
                            input.centroid,
                            path + ".centroid",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        }),
                    "number" === typeof input.radius ||
                        $report(exceptionable, {
                            path: path + ".radius",
                            expected: "number",
                            value: input.radius,
                        }),
                    "circle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"circle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vu0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $vo0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $vo1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $vo3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $vo4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $vo5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $vo6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $vo8(input, path, true && exceptionable);
                    return $report(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: path + "[" + index1 + "]",
                                        expected:
                                            '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                        value: elem,
                                    })) &&
                                    $vu0(
                                        elem,
                                        path + "[" + index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: path + "[" + index1 + "]",
                                    expected:
                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as typia.IValidation<ObjectUnionExplicit>;
    };
    input = JSON.parse(input);
    const output = validate(input);
    return output;
};
/**
 * Transformed {@link createStringify} function
 */
export const generate_stringify = (input: ObjectUnionExplicit): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    const $io0 = (input: any) =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type;
    const $io1 = (input: any) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2) &&
        "line" === input.type;
    const $io2 = (input: any) =>
        "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any) =>
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
    const $io4 = (input: any) =>
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
    const $io5 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        ) &&
        "polyline" === input.type;
    const $io6 = (input: any) =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io7(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io7(elem),
        ) &&
        "polygon" === input.type;
    const $io7 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        );
    const $io8 = (input: any) =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io2(input.centroid) &&
        "number" === typeof input.radius &&
        "circle" === input.type;
    const $iu0 = (input: any) =>
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
    const $so0 = (input: any) =>
        `{"x":${input.x},"y":${input.y},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"point"',
                value: input.type,
            });
        })()}}`;
    const $so1 = (input: any) =>
        `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"line"',
                value: input.type,
            });
        })()}}`;
    const $so2 = (input: any) => `{"x":${input.x},"y":${input.y}}`;
    const $so3 = (input: any) =>
        `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"triangle"',
                value: input.type,
            });
        })()}}`;
    const $so4 = (input: any) =>
        `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"p4":${`{"x":${input.p4.x},"y":${input.p4.y}}`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"rectangle"',
                value: input.type,
            });
        })()}}`;
    const $so5 = (input: any) =>
        `{"points":${`[${input.points
            .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
            .join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"polyline"',
                value: input.type,
            });
        })()}}`;
    const $so6 = (input: any) =>
        `{"outer":${$so7(input.outer)},"inner":${`[${input.inner
            .map((elem: any) => $so7(elem))
            .join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"polygon"',
                value: input.type,
            });
        })()}}`;
    const $so7 = (input: any) =>
        `{"points":${`[${input.points
            .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
            .join(",")}]`}}`;
    const $so8 = (input: any) =>
        `{"centroid":${`{"x":${input.centroid.x},"y":${input.centroid.y}}`},"radius":${
            input.radius
        },"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
                expected: '"circle"',
                value: input.type,
            });
        })()}}`;
    const $su0 = (input: any) =>
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
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
};
/**
 * Transformed {@link createAssertStringify} function
 */
export const generate_assert_stringify = (
    input: ObjectUnionExplicit,
): string => {
    const assert = (input: any) => {
        const $guard = (typia.createAssertStringify as any).guard;
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $ao0 = (input: any, path: string, exceptionable: boolean) =>
                (("number" === typeof input.x && !Number.isNaN(input.x)) ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                (("number" === typeof input.y && !Number.isNaN(input.y)) ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                ("point" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }));
            const $ao1 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                ("line" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }));
            const $ao2 = (input: any, path: string, exceptionable: boolean) =>
                (("number" === typeof input.x && !Number.isNaN(input.x)) ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                (("number" === typeof input.y && !Number.isNaN(input.y)) ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }));
            const $ao3 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                ("triangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }));
            const $ao4 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                (("object" === typeof input.p4 && null !== input.p4) ||
                    $guard(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                $ao2(input.p4, path + ".p4", true && exceptionable) &&
                ("rectangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }));
            const $ao5 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index2 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index2 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polyline" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }));
            const $ao6 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.outer && null !== input.outer) ||
                    $guard(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                $ao7(input.outer, path + ".outer", true && exceptionable) &&
                (Array.isArray(input.inner) ||
                    $guard(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                input.inner.every(
                    (elem: any, index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".inner[" + index3 + "]",
                                expected:
                                    "Resolve<ObjectUnionExplicit.IPolyline>",
                                value: elem,
                            })) &&
                        $ao7(
                            elem,
                            path + ".inner[" + index3 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polygon" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }));
            const $ao7 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index4: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index4 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index4 + "]",
                            true && exceptionable,
                        ),
                );
            const $ao8 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $guard(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                $ao2(
                    input.centroid,
                    path + ".centroid",
                    true && exceptionable,
                ) &&
                (("number" === typeof input.radius &&
                    !Number.isNaN(input.radius)) ||
                    $guard(exceptionable, {
                        path: path + ".radius",
                        expected: "number",
                        value: input.radius,
                    })) &&
                ("circle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }));
            const $au0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $ao0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $ao1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $ao3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $ao4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $ao5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $ao6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $ao8(input, path, true && exceptionable);
                    return $guard(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                input.every(
                    (elem: any, index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: path + "[" + index1 + "]",
                                expected:
                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                value: elem,
                            })) &&
                        $au0(elem, path + "[" + index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input as ObjectUnionExplicit;
    };
    const stringify = (input: ObjectUnionExplicit): string => {
        const $string = (typia.createAssertStringify as any).string;
        const $throws = (typia.createAssertStringify as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $so0 = (input: any) =>
            `{"x":${input.x},"y":${input.y},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"point"',
                    value: input.type,
                });
            })()}}`;
        const $so1 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"line"',
                    value: input.type,
                });
            })()}}`;
        const $so2 = (input: any) => `{"x":${input.x},"y":${input.y}}`;
        const $so3 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"triangle"',
                    value: input.type,
                });
            })()}}`;
        const $so4 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"p4":${`{"x":${input.p4.x},"y":${input.p4.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"rectangle"',
                    value: input.type,
                });
            })()}}`;
        const $so5 = (input: any) =>
            `{"points":${`[${input.points
                .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
                .join(",")}]`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polyline"',
                    value: input.type,
                });
            })()}}`;
        const $so6 = (input: any) =>
            `{"outer":${$so7(input.outer)},"inner":${`[${input.inner
                .map((elem: any) => $so7(elem))
                .join(",")}]`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polygon"',
                    value: input.type,
                });
            })()}}`;
        const $so7 = (input: any) =>
            `{"points":${`[${input.points
                .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
                .join(",")}]`}}`;
        const $so8 = (input: any) =>
            `{"centroid":${`{"x":${input.centroid.x},"y":${input.centroid.y}}`},"radius":${
                input.radius
            },"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"circle"',
                    value: input.type,
                });
            })()}}`;
        const $su0 = (input: any) =>
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
        return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
    };
    return stringify(assert(input));
};
/**
 * Transformed {@link createIsStringify} function
 */
export const generate_is_stringify = (
    input: ObjectUnionExplicit,
): string | null => {
    const is = (input: any): input is ObjectUnionExplicit => {
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            !Number.isNaN(input.x) &&
            "number" === typeof input.y &&
            !Number.isNaN(input.y) &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            !Number.isNaN(input.p1.x) &&
            "number" === typeof input.p1.y &&
            !Number.isNaN(input.p1.y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            !Number.isNaN(input.p2.x) &&
            "number" === typeof input.p2.y &&
            !Number.isNaN(input.p2.y) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x &&
            !Number.isNaN(input.x) &&
            "number" === typeof input.y &&
            !Number.isNaN(input.y);
        const $io3 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            !Number.isNaN(input.p1.x) &&
            "number" === typeof input.p1.y &&
            !Number.isNaN(input.p1.y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            !Number.isNaN(input.p2.x) &&
            "number" === typeof input.p2.y &&
            !Number.isNaN(input.p2.y) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            !Number.isNaN(input.p3.x) &&
            "number" === typeof input.p3.y &&
            !Number.isNaN(input.p3.y) &&
            "triangle" === input.type;
        const $io4 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            !Number.isNaN(input.p1.x) &&
            "number" === typeof input.p1.y &&
            !Number.isNaN(input.p1.y) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            !Number.isNaN(input.p2.x) &&
            "number" === typeof input.p2.y &&
            !Number.isNaN(input.p2.y) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            !Number.isNaN(input.p3.x) &&
            "number" === typeof input.p3.y &&
            !Number.isNaN(input.p3.y) &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            "number" === typeof input.p4.x &&
            !Number.isNaN(input.p4.x) &&
            "number" === typeof input.p4.y &&
            !Number.isNaN(input.p4.y) &&
            "rectangle" === input.type;
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            "number" === typeof input.centroid.x &&
            !Number.isNaN(input.centroid.x) &&
            "number" === typeof input.centroid.y &&
            !Number.isNaN(input.centroid.y) &&
            "number" === typeof input.radius &&
            !Number.isNaN(input.radius) &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
                    "object" === typeof elem && null !== elem && $iu0(elem),
            )
        );
    };
    const stringify = (input: ObjectUnionExplicit): string => {
        const $string = (typia.createIsStringify as any).string;
        const $throws = (typia.createIsStringify as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $so0 = (input: any) =>
            `{"x":${input.x},"y":${input.y},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"point"',
                    value: input.type,
                });
            })()}}`;
        const $so1 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"line"',
                    value: input.type,
                });
            })()}}`;
        const $so2 = (input: any) => `{"x":${input.x},"y":${input.y}}`;
        const $so3 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"triangle"',
                    value: input.type,
                });
            })()}}`;
        const $so4 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"p4":${`{"x":${input.p4.x},"y":${input.p4.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"rectangle"',
                    value: input.type,
                });
            })()}}`;
        const $so5 = (input: any) =>
            `{"points":${`[${input.points
                .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
                .join(",")}]`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polyline"',
                    value: input.type,
                });
            })()}}`;
        const $so6 = (input: any) =>
            `{"outer":${$so7(input.outer)},"inner":${`[${input.inner
                .map((elem: any) => $so7(elem))
                .join(",")}]`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polygon"',
                    value: input.type,
                });
            })()}}`;
        const $so7 = (input: any) =>
            `{"points":${`[${input.points
                .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
                .join(",")}]`}}`;
        const $so8 = (input: any) =>
            `{"centroid":${`{"x":${input.centroid.x},"y":${input.centroid.y}}`},"radius":${
                input.radius
            },"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"circle"',
                    value: input.type,
                });
            })()}}`;
        const $su0 = (input: any) =>
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
        return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
};
/**
 * Transformed {@link createValidateStringify} function
 */
export const generate_validate_stringify = (
    input: ObjectUnionExplicit,
): typia.IValidation<string> => {
    const validate = (input: any): typia.IValidation<ObjectUnionExplicit> => {
        const errors = [] as any[];
        const $report = (typia.createValidateStringify as any).report(errors);
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $vo0 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ("number" === typeof input.x && !Number.isNaN(input.x)) ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && !Number.isNaN(input.y)) ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                    "point" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"point"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    "line" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"line"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ("number" === typeof input.x && !Number.isNaN(input.x)) ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && !Number.isNaN(input.y)) ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    "triangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"triangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo4 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    ((("object" === typeof input.p4 && null !== input.p4) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        })) &&
                        $vo2(input.p4, path + ".p4", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        }),
                    "rectangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"rectangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo5 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index2 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index2 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                    "polyline" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polyline"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo6 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.outer &&
                        null !== input.outer) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        })) &&
                        $vo7(
                            input.outer,
                            path + ".outer",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        }),
                    ((Array.isArray(input.inner) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        })) &&
                        input.inner
                            .map(
                                (elem: any, index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path + ".inner[" + index3 + "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPolyline>",
                                            value: elem,
                                        })) &&
                                        $vo7(
                                            elem,
                                            path + ".inner[" + index3 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".inner[" + index3 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPolyline>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        }),
                    "polygon" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polygon"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo7 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index4 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index4 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index4 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                ].every((flag: boolean) => flag);
            const $vo8 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.centroid &&
                        null !== input.centroid) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        })) &&
                        $vo2(
                            input.centroid,
                            path + ".centroid",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        }),
                    ("number" === typeof input.radius &&
                        !Number.isNaN(input.radius)) ||
                        $report(exceptionable, {
                            path: path + ".radius",
                            expected: "number",
                            value: input.radius,
                        }),
                    "circle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"circle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vu0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $vo0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $vo1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $vo3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $vo4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $vo5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $vo6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $vo8(input, path, true && exceptionable);
                    return $report(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: path + "[" + index1 + "]",
                                        expected:
                                            '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                        value: elem,
                                    })) &&
                                    $vu0(
                                        elem,
                                        path + "[" + index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: path + "[" + index1 + "]",
                                    expected:
                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as typia.IValidation<ObjectUnionExplicit>;
    };
    const stringify = (input: ObjectUnionExplicit): string => {
        const $string = (typia.createValidateStringify as any).string;
        const $throws = (typia.createValidateStringify as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $so0 = (input: any) =>
            `{"x":${input.x},"y":${input.y},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"point"',
                    value: input.type,
                });
            })()}}`;
        const $so1 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"line"',
                    value: input.type,
                });
            })()}}`;
        const $so2 = (input: any) => `{"x":${input.x},"y":${input.y}}`;
        const $so3 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"triangle"',
                    value: input.type,
                });
            })()}}`;
        const $so4 = (input: any) =>
            `{"p1":${`{"x":${input.p1.x},"y":${input.p1.y}}`},"p2":${`{"x":${input.p2.x},"y":${input.p2.y}}`},"p3":${`{"x":${input.p3.x},"y":${input.p3.y}}`},"p4":${`{"x":${input.p4.x},"y":${input.p4.y}}`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"rectangle"',
                    value: input.type,
                });
            })()}}`;
        const $so5 = (input: any) =>
            `{"points":${`[${input.points
                .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
                .join(",")}]`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polyline"',
                    value: input.type,
                });
            })()}}`;
        const $so6 = (input: any) =>
            `{"outer":${$so7(input.outer)},"inner":${`[${input.inner
                .map((elem: any) => $so7(elem))
                .join(",")}]`},"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"polygon"',
                    value: input.type,
                });
            })()}}`;
        const $so7 = (input: any) =>
            `{"points":${`[${input.points
                .map((elem: any) => `{"x":${elem.x},"y":${elem.y}}`)
                .join(",")}]`}}`;
        const $so8 = (input: any) =>
            `{"centroid":${`{"x":${input.centroid.x},"y":${input.centroid.y}}`},"radius":${
                input.radius
            },"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"circle"',
                    value: input.type,
                });
            })()}}`;
        const $su0 = (input: any) =>
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
        return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
    };
    const output = validate(input) as any;
    if (output.success) output.data = stringify(input);
    return output;
};
/* -----------------------------------------------------------
    MISCELLANEOUS
----------------------------------------------------------- */
/**
 * Transformed {@link createRandom} function
 */
export const generate_random = (
    generator: typia.IRandomGenerator = (typia.createRandom as any).generator,
) => {
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        x: generator.number(0, 100),
        y: generator.number(0, 100),
        type: "point",
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        p1: $ro2(recursive, recursive ? 1 + depth : depth),
        p2: $ro2(recursive, recursive ? 1 + depth : depth),
        type: "line",
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        x: generator.number(0, 100),
        y: generator.number(0, 100),
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        p1: $ro2(recursive, recursive ? 1 + depth : depth),
        p2: $ro2(recursive, recursive ? 1 + depth : depth),
        p3: $ro2(recursive, recursive ? 1 + depth : depth),
        type: "triangle",
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        p1: $ro2(recursive, recursive ? 1 + depth : depth),
        p2: $ro2(recursive, recursive ? 1 + depth : depth),
        p3: $ro2(recursive, recursive ? 1 + depth : depth),
        p4: $ro2(recursive, recursive ? 1 + depth : depth),
        type: "rectangle",
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        points: generator.array(() =>
            $ro2(recursive, recursive ? 1 + depth : depth),
        ),
        type: "polyline",
    });
    const $ro6 = (recursive = false, depth = 0) => ({
        outer: $ro7(recursive, recursive ? 1 + depth : depth),
        inner: generator.array(() =>
            $ro7(recursive, recursive ? 1 + depth : depth),
        ),
        type: "polygon",
    });
    const $ro7 = (recursive = false, depth = 0) => ({
        points: generator.array(() =>
            $ro2(recursive, recursive ? 1 + depth : depth),
        ),
    });
    const $ro8 = (recursive = false, depth = 0) => ({
        centroid: $ro2(recursive, recursive ? 1 + depth : depth),
        radius: generator.number(0, 100),
        type: "circle",
    });
    return generator.array(() =>
        $pick([
            () => $ro0(),
            () => $ro1(),
            () => $ro3(),
            () => $ro4(),
            () => $ro5(),
            () => $ro6(),
            () => $ro8(),
        ])(),
    );
};
/**
 * Transformed {@link createClone} function
 */
export const generate_clone = (
    input: ObjectUnionExplicit,
): typia.Primitive<ObjectUnionExplicit> => {
    const $throws = (typia.createClone as any).throws;
    const $io0 = (input: any) =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type;
    const $io1 = (input: any) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2) &&
        "line" === input.type;
    const $io2 = (input: any) =>
        "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any) =>
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
    const $io4 = (input: any) =>
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
    const $io5 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        ) &&
        "polyline" === input.type;
    const $io6 = (input: any) =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io7(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io7(elem),
        ) &&
        "polygon" === input.type;
    const $io7 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        );
    const $io8 = (input: any) =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io2(input.centroid) &&
        "number" === typeof input.radius &&
        "circle" === input.type;
    const $iu0 = (input: any) =>
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
    const $co0 = (input: any) => ({
        x: input.x,
        y: input.y,
        type: input.type,
    });
    const $co1 = (input: any) => ({
        p1:
            "object" === typeof input.p1 && null !== input.p1
                ? $co2(input.p1)
                : input.p1,
        p2:
            "object" === typeof input.p2 && null !== input.p2
                ? $co2(input.p2)
                : input.p2,
        type: input.type,
    });
    const $co2 = (input: any) => ({
        x: input.x,
        y: input.y,
    });
    const $co3 = (input: any) => ({
        p1:
            "object" === typeof input.p1 && null !== input.p1
                ? $co2(input.p1)
                : input.p1,
        p2:
            "object" === typeof input.p2 && null !== input.p2
                ? $co2(input.p2)
                : input.p2,
        p3:
            "object" === typeof input.p3 && null !== input.p3
                ? $co2(input.p3)
                : input.p3,
        type: input.type,
    });
    const $co4 = (input: any) => ({
        p1:
            "object" === typeof input.p1 && null !== input.p1
                ? $co2(input.p1)
                : input.p1,
        p2:
            "object" === typeof input.p2 && null !== input.p2
                ? $co2(input.p2)
                : input.p2,
        p3:
            "object" === typeof input.p3 && null !== input.p3
                ? $co2(input.p3)
                : input.p3,
        p4:
            "object" === typeof input.p4 && null !== input.p4
                ? $co2(input.p4)
                : input.p4,
        type: input.type,
    });
    const $co5 = (input: any) => ({
        points: Array.isArray(input.points)
            ? input.points.map((elem: any) =>
                  "object" === typeof elem && null !== elem ? $co2(elem) : elem,
              )
            : input.points,
        type: input.type,
    });
    const $co6 = (input: any) => ({
        outer:
            "object" === typeof input.outer && null !== input.outer
                ? $co7(input.outer)
                : input.outer,
        inner: Array.isArray(input.inner)
            ? input.inner.map((elem: any) =>
                  "object" === typeof elem && null !== elem ? $co7(elem) : elem,
              )
            : input.inner,
        type: input.type,
    });
    const $co7 = (input: any) => ({
        points: Array.isArray(input.points)
            ? input.points.map((elem: any) =>
                  "object" === typeof elem && null !== elem ? $co2(elem) : elem,
              )
            : input.points,
    });
    const $co8 = (input: any) => ({
        centroid:
            "object" === typeof input.centroid && null !== input.centroid
                ? $co2(input.centroid)
                : input.centroid,
        radius: input.radius,
        type: input.type,
    });
    const $cu0 = (input: any) =>
        (() => {
            if ("point" === input.type) return $co0(input);
            if ("line" === input.type) return $co1(input);
            if ("triangle" === input.type) return $co3(input);
            if ("rectangle" === input.type) return $co4(input);
            if ("polyline" === input.type) return $co5(input);
            if ("polygon" === input.type) return $co6(input);
            if ("circle" === input.type) return $co8(input);
            $throws({
                expected:
                    '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                value: input,
            });
        })();
    return Array.isArray(input)
        ? input.map((elem: any) =>
              "object" === typeof elem && null !== elem ? $cu0(elem) : elem,
          )
        : input;
};
/**
 * Transformed {@link createAssertClone} function
 */
export const generate_assert_clone = (
    input: any,
): typia.Primitive<ObjectUnionExplicit> => {
    const assert = (input: any) => {
        const $guard = (typia.createAssertClone as any).guard;
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $ao0 = (input: any, path: string, exceptionable: boolean) =>
                ("number" === typeof input.x ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                ("number" === typeof input.y ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                ("point" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }));
            const $ao1 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                ("line" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }));
            const $ao2 = (input: any, path: string, exceptionable: boolean) =>
                ("number" === typeof input.x ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                ("number" === typeof input.y ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }));
            const $ao3 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                ("triangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }));
            const $ao4 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                (("object" === typeof input.p4 && null !== input.p4) ||
                    $guard(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                $ao2(input.p4, path + ".p4", true && exceptionable) &&
                ("rectangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }));
            const $ao5 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index2 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index2 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polyline" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }));
            const $ao6 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.outer && null !== input.outer) ||
                    $guard(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                $ao7(input.outer, path + ".outer", true && exceptionable) &&
                (Array.isArray(input.inner) ||
                    $guard(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                input.inner.every(
                    (elem: any, index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".inner[" + index3 + "]",
                                expected:
                                    "Resolve<ObjectUnionExplicit.IPolyline>",
                                value: elem,
                            })) &&
                        $ao7(
                            elem,
                            path + ".inner[" + index3 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polygon" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }));
            const $ao7 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index4: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index4 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index4 + "]",
                            true && exceptionable,
                        ),
                );
            const $ao8 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $guard(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                $ao2(
                    input.centroid,
                    path + ".centroid",
                    true && exceptionable,
                ) &&
                ("number" === typeof input.radius ||
                    $guard(exceptionable, {
                        path: path + ".radius",
                        expected: "number",
                        value: input.radius,
                    })) &&
                ("circle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }));
            const $au0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $ao0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $ao1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $ao3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $ao4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $ao5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $ao6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $ao8(input, path, true && exceptionable);
                    return $guard(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                input.every(
                    (elem: any, index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: path + "[" + index1 + "]",
                                expected:
                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                value: elem,
                            })) &&
                        $au0(elem, path + "[" + index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input as ObjectUnionExplicit;
    };
    const clone = (
        input: ObjectUnionExplicit,
    ): typia.Primitive<ObjectUnionExplicit> => {
        const $throws = (typia.createAssertClone as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $co0 = (input: any) => ({
            x: input.x,
            y: input.y,
            type: input.type,
        });
        const $co1 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            type: input.type,
        });
        const $co2 = (input: any) => ({
            x: input.x,
            y: input.y,
        });
        const $co3 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            p3:
                "object" === typeof input.p3 && null !== input.p3
                    ? $co2(input.p3)
                    : input.p3,
            type: input.type,
        });
        const $co4 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            p3:
                "object" === typeof input.p3 && null !== input.p3
                    ? $co2(input.p3)
                    : input.p3,
            p4:
                "object" === typeof input.p4 && null !== input.p4
                    ? $co2(input.p4)
                    : input.p4,
            type: input.type,
        });
        const $co5 = (input: any) => ({
            points: Array.isArray(input.points)
                ? input.points.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : elem,
                  )
                : input.points,
            type: input.type,
        });
        const $co6 = (input: any) => ({
            outer:
                "object" === typeof input.outer && null !== input.outer
                    ? $co7(input.outer)
                    : input.outer,
            inner: Array.isArray(input.inner)
                ? input.inner.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co7(elem)
                          : elem,
                  )
                : input.inner,
            type: input.type,
        });
        const $co7 = (input: any) => ({
            points: Array.isArray(input.points)
                ? input.points.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : elem,
                  )
                : input.points,
        });
        const $co8 = (input: any) => ({
            centroid:
                "object" === typeof input.centroid && null !== input.centroid
                    ? $co2(input.centroid)
                    : input.centroid,
            radius: input.radius,
            type: input.type,
        });
        const $cu0 = (input: any) =>
            (() => {
                if ("point" === input.type) return $co0(input);
                if ("line" === input.type) return $co1(input);
                if ("triangle" === input.type) return $co3(input);
                if ("rectangle" === input.type) return $co4(input);
                if ("polyline" === input.type) return $co5(input);
                if ("polygon" === input.type) return $co6(input);
                if ("circle" === input.type) return $co8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem ? $cu0(elem) : elem,
              )
            : input;
    };
    assert(input);
    const output = clone(input);
    return output as ObjectUnionExplicit;
};
/**
 * Transformed {@link createIsClone} function
 */
export const generate_is_clone = (
    input: any,
): typia.Primitive<ObjectUnionExplicit> | null => {
    const is = (input: any): input is ObjectUnionExplicit => {
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            "number" === typeof input.p3.y &&
            "triangle" === input.type;
        const $io4 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            "number" === typeof input.p3.y &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            "number" === typeof input.p4.x &&
            "number" === typeof input.p4.y &&
            "rectangle" === input.type;
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            "number" === typeof input.centroid.x &&
            "number" === typeof input.centroid.y &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
                    "object" === typeof elem && null !== elem && $iu0(elem),
            )
        );
    };
    const clone = (
        input: ObjectUnionExplicit,
    ): typia.Primitive<ObjectUnionExplicit> => {
        const $throws = (typia.createIsClone as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $co0 = (input: any) => ({
            x: input.x,
            y: input.y,
            type: input.type,
        });
        const $co1 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            type: input.type,
        });
        const $co2 = (input: any) => ({
            x: input.x,
            y: input.y,
        });
        const $co3 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            p3:
                "object" === typeof input.p3 && null !== input.p3
                    ? $co2(input.p3)
                    : input.p3,
            type: input.type,
        });
        const $co4 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            p3:
                "object" === typeof input.p3 && null !== input.p3
                    ? $co2(input.p3)
                    : input.p3,
            p4:
                "object" === typeof input.p4 && null !== input.p4
                    ? $co2(input.p4)
                    : input.p4,
            type: input.type,
        });
        const $co5 = (input: any) => ({
            points: Array.isArray(input.points)
                ? input.points.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : elem,
                  )
                : input.points,
            type: input.type,
        });
        const $co6 = (input: any) => ({
            outer:
                "object" === typeof input.outer && null !== input.outer
                    ? $co7(input.outer)
                    : input.outer,
            inner: Array.isArray(input.inner)
                ? input.inner.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co7(elem)
                          : elem,
                  )
                : input.inner,
            type: input.type,
        });
        const $co7 = (input: any) => ({
            points: Array.isArray(input.points)
                ? input.points.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : elem,
                  )
                : input.points,
        });
        const $co8 = (input: any) => ({
            centroid:
                "object" === typeof input.centroid && null !== input.centroid
                    ? $co2(input.centroid)
                    : input.centroid,
            radius: input.radius,
            type: input.type,
        });
        const $cu0 = (input: any) =>
            (() => {
                if ("point" === input.type) return $co0(input);
                if ("line" === input.type) return $co1(input);
                if ("triangle" === input.type) return $co3(input);
                if ("rectangle" === input.type) return $co4(input);
                if ("polyline" === input.type) return $co5(input);
                if ("polygon" === input.type) return $co6(input);
                if ("circle" === input.type) return $co8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem ? $cu0(elem) : elem,
              )
            : input;
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
};
/**
 * Transformed {@link createValidateClone} function
 */
export const generate_validate_clone = (
    input: any,
): typia.IValidation<typia.Primitive<ObjectUnionExplicit>> => {
    const validate = (input: any): typia.IValidation<ObjectUnionExplicit> => {
        const errors = [] as any[];
        const $report = (typia.createValidateClone as any).report(errors);
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $vo0 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ("number" === typeof input.x && !Number.isNaN(input.x)) ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && !Number.isNaN(input.y)) ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                    "point" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"point"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    "line" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"line"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ("number" === typeof input.x && !Number.isNaN(input.x)) ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && !Number.isNaN(input.y)) ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    "triangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"triangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo4 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    ((("object" === typeof input.p4 && null !== input.p4) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        })) &&
                        $vo2(input.p4, path + ".p4", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        }),
                    "rectangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"rectangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo5 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index2 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index2 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                    "polyline" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polyline"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo6 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.outer &&
                        null !== input.outer) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        })) &&
                        $vo7(
                            input.outer,
                            path + ".outer",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        }),
                    ((Array.isArray(input.inner) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        })) &&
                        input.inner
                            .map(
                                (elem: any, index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path + ".inner[" + index3 + "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPolyline>",
                                            value: elem,
                                        })) &&
                                        $vo7(
                                            elem,
                                            path + ".inner[" + index3 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".inner[" + index3 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPolyline>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        }),
                    "polygon" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polygon"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo7 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index4 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index4 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index4 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                ].every((flag: boolean) => flag);
            const $vo8 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.centroid &&
                        null !== input.centroid) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        })) &&
                        $vo2(
                            input.centroid,
                            path + ".centroid",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        }),
                    ("number" === typeof input.radius &&
                        !Number.isNaN(input.radius)) ||
                        $report(exceptionable, {
                            path: path + ".radius",
                            expected: "number",
                            value: input.radius,
                        }),
                    "circle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"circle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vu0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $vo0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $vo1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $vo3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $vo4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $vo5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $vo6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $vo8(input, path, true && exceptionable);
                    return $report(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: path + "[" + index1 + "]",
                                        expected:
                                            '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                        value: elem,
                                    })) &&
                                    $vu0(
                                        elem,
                                        path + "[" + index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: path + "[" + index1 + "]",
                                    expected:
                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as typia.IValidation<ObjectUnionExplicit>;
    };
    const clone = (
        input: ObjectUnionExplicit,
    ): typia.Primitive<ObjectUnionExplicit> => {
        const $throws = (typia.createValidateClone as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $co0 = (input: any) => ({
            x: input.x,
            y: input.y,
            type: input.type,
        });
        const $co1 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            type: input.type,
        });
        const $co2 = (input: any) => ({
            x: input.x,
            y: input.y,
        });
        const $co3 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            p3:
                "object" === typeof input.p3 && null !== input.p3
                    ? $co2(input.p3)
                    : input.p3,
            type: input.type,
        });
        const $co4 = (input: any) => ({
            p1:
                "object" === typeof input.p1 && null !== input.p1
                    ? $co2(input.p1)
                    : input.p1,
            p2:
                "object" === typeof input.p2 && null !== input.p2
                    ? $co2(input.p2)
                    : input.p2,
            p3:
                "object" === typeof input.p3 && null !== input.p3
                    ? $co2(input.p3)
                    : input.p3,
            p4:
                "object" === typeof input.p4 && null !== input.p4
                    ? $co2(input.p4)
                    : input.p4,
            type: input.type,
        });
        const $co5 = (input: any) => ({
            points: Array.isArray(input.points)
                ? input.points.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : elem,
                  )
                : input.points,
            type: input.type,
        });
        const $co6 = (input: any) => ({
            outer:
                "object" === typeof input.outer && null !== input.outer
                    ? $co7(input.outer)
                    : input.outer,
            inner: Array.isArray(input.inner)
                ? input.inner.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co7(elem)
                          : elem,
                  )
                : input.inner,
            type: input.type,
        });
        const $co7 = (input: any) => ({
            points: Array.isArray(input.points)
                ? input.points.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $co2(elem)
                          : elem,
                  )
                : input.points,
        });
        const $co8 = (input: any) => ({
            centroid:
                "object" === typeof input.centroid && null !== input.centroid
                    ? $co2(input.centroid)
                    : input.centroid,
            radius: input.radius,
            type: input.type,
        });
        const $cu0 = (input: any) =>
            (() => {
                if ("point" === input.type) return $co0(input);
                if ("line" === input.type) return $co1(input);
                if ("triangle" === input.type) return $co3(input);
                if ("rectangle" === input.type) return $co4(input);
                if ("polyline" === input.type) return $co5(input);
                if ("polygon" === input.type) return $co6(input);
                if ("circle" === input.type) return $co8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem ? $cu0(elem) : elem,
              )
            : input;
    };
    const output = validate(input) as any;
    if (output.success) output.data = clone(input);
    return output;
};
/**
 * Transformed {@link createPrune} function
 */
export const generate_prune = (input: ObjectUnionExplicit): void => {
    const $throws = (typia.createPrune as any).throws;
    const $io0 = (input: any) =>
        "number" === typeof input.x &&
        "number" === typeof input.y &&
        "point" === input.type;
    const $io1 = (input: any) =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io2(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io2(input.p2) &&
        "line" === input.type;
    const $io2 = (input: any) =>
        "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any) =>
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
    const $io4 = (input: any) =>
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
    const $io5 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        ) &&
        "polyline" === input.type;
    const $io6 = (input: any) =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io7(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io7(elem),
        ) &&
        "polygon" === input.type;
    const $io7 = (input: any) =>
        Array.isArray(input.points) &&
        input.points.every(
            (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
        );
    const $io8 = (input: any) =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io2(input.centroid) &&
        "number" === typeof input.radius &&
        "circle" === input.type;
    const $iu0 = (input: any) =>
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
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key || "type" === key) continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        if ("object" === typeof input.p1 && null !== input.p1) $po2(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po2(input.p2);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "type" === key) continue;
            delete input[key];
        }
    };
    const $po2 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key) continue;
            delete input[key];
        }
    };
    const $po3 = (input: any) => {
        if ("object" === typeof input.p1 && null !== input.p1) $po2(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po2(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po2(input.p3);
        for (const key of Object.keys(input)) {
            if ("p1" === key || "p2" === key || "p3" === key || "type" === key)
                continue;
            delete input[key];
        }
    };
    const $po4 = (input: any) => {
        if ("object" === typeof input.p1 && null !== input.p1) $po2(input.p1);
        if ("object" === typeof input.p2 && null !== input.p2) $po2(input.p2);
        if ("object" === typeof input.p3 && null !== input.p3) $po2(input.p3);
        if ("object" === typeof input.p4 && null !== input.p4) $po2(input.p4);
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
    const $po5 = (input: any) => {
        if (Array.isArray(input.points))
            input.points.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po2(elem);
            });
        for (const key of Object.keys(input)) {
            if ("points" === key || "type" === key) continue;
            delete input[key];
        }
    };
    const $po6 = (input: any) => {
        if ("object" === typeof input.outer && null !== input.outer)
            $po7(input.outer);
        if (Array.isArray(input.inner))
            input.inner.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po7(elem);
            });
        for (const key of Object.keys(input)) {
            if ("outer" === key || "inner" === key || "type" === key) continue;
            delete input[key];
        }
    };
    const $po7 = (input: any) => {
        if (Array.isArray(input.points))
            input.points.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po2(elem);
            });
        for (const key of Object.keys(input)) {
            if ("points" === key) continue;
            delete input[key];
        }
    };
    const $po8 = (input: any) => {
        if ("object" === typeof input.centroid && null !== input.centroid)
            $po2(input.centroid);
        for (const key of Object.keys(input)) {
            if ("centroid" === key || "radius" === key || "type" === key)
                continue;
            delete input[key];
        }
    };
    const $pu0 = (input: any) =>
        (() => {
            if ("point" === input.type) return $po0(input);
            if ("line" === input.type) return $po1(input);
            if ("triangle" === input.type) return $po3(input);
            if ("rectangle" === input.type) return $po4(input);
            if ("polyline" === input.type) return $po5(input);
            if ("polygon" === input.type) return $po6(input);
            if ("circle" === input.type) return $po8(input);
            $throws({
                expected:
                    '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                value: input,
            });
        })();
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $pu0(elem);
        });
};
/**
 * Transformed {@link createAssertPrune} function
 */
export const generate_assert_prune = (input: any): ObjectUnionExplicit => {
    const assert = (input: any) => {
        const $guard = (typia.createAssertPrune as any).guard;
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $ao0 = (input: any, path: string, exceptionable: boolean) =>
                ("number" === typeof input.x ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                ("number" === typeof input.y ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                ("point" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }));
            const $ao1 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                ("line" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }));
            const $ao2 = (input: any, path: string, exceptionable: boolean) =>
                ("number" === typeof input.x ||
                    $guard(exceptionable, {
                        path: path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                ("number" === typeof input.y ||
                    $guard(exceptionable, {
                        path: path + ".y",
                        expected: "number",
                        value: input.y,
                    }));
            const $ao3 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                ("triangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }));
            const $ao4 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(exceptionable, {
                        path: path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao2(input.p1, path + ".p1", true && exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(exceptionable, {
                        path: path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao2(input.p2, path + ".p2", true && exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(exceptionable, {
                        path: path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao2(input.p3, path + ".p3", true && exceptionable) &&
                (("object" === typeof input.p4 && null !== input.p4) ||
                    $guard(exceptionable, {
                        path: path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                $ao2(input.p4, path + ".p4", true && exceptionable) &&
                ("rectangle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }));
            const $ao5 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index2 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index2 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polyline" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }));
            const $ao6 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.outer && null !== input.outer) ||
                    $guard(exceptionable, {
                        path: path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                $ao7(input.outer, path + ".outer", true && exceptionable) &&
                (Array.isArray(input.inner) ||
                    $guard(exceptionable, {
                        path: path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                input.inner.every(
                    (elem: any, index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".inner[" + index3 + "]",
                                expected:
                                    "Resolve<ObjectUnionExplicit.IPolyline>",
                                value: elem,
                            })) &&
                        $ao7(
                            elem,
                            path + ".inner[" + index3 + "]",
                            true && exceptionable,
                        ),
                ) &&
                ("polygon" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }));
            const $ao7 = (input: any, path: string, exceptionable: boolean) =>
                (Array.isArray(input.points) ||
                    $guard(exceptionable, {
                        path: path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, index4: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(exceptionable, {
                                path: path + ".points[" + index4 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao2(
                            elem,
                            path + ".points[" + index4 + "]",
                            true && exceptionable,
                        ),
                );
            const $ao8 = (input: any, path: string, exceptionable: boolean) =>
                (("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $guard(exceptionable, {
                        path: path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                $ao2(
                    input.centroid,
                    path + ".centroid",
                    true && exceptionable,
                ) &&
                ("number" === typeof input.radius ||
                    $guard(exceptionable, {
                        path: path + ".radius",
                        expected: "number",
                        value: input.radius,
                    })) &&
                ("circle" === input.type ||
                    $guard(exceptionable, {
                        path: path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }));
            const $au0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $ao0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $ao1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $ao3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $ao4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $ao5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $ao6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $ao8(input, path, true && exceptionable);
                    return $guard(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                input.every(
                    (elem: any, index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: path + "[" + index1 + "]",
                                expected:
                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                value: elem,
                            })) &&
                        $au0(elem, path + "[" + index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input as ObjectUnionExplicit;
    };
    const prune = (input: ObjectUnionExplicit): void => {
        const $throws = (typia.createAssertPrune as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $po0 = (input: any) => {
            for (const key of Object.keys(input)) {
                if ("x" === key || "y" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            for (const key of Object.keys(input)) {
                if ("p1" === key || "p2" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po2 = (input: any) => {
            for (const key of Object.keys(input)) {
                if ("x" === key || "y" === key) continue;
                delete input[key];
            }
        };
        const $po3 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            if ("object" === typeof input.p3 && null !== input.p3)
                $po2(input.p3);
            for (const key of Object.keys(input)) {
                if (
                    "p1" === key ||
                    "p2" === key ||
                    "p3" === key ||
                    "type" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po4 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            if ("object" === typeof input.p3 && null !== input.p3)
                $po2(input.p3);
            if ("object" === typeof input.p4 && null !== input.p4)
                $po2(input.p4);
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
        const $po5 = (input: any) => {
            if (Array.isArray(input.points))
                input.points.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            for (const key of Object.keys(input)) {
                if ("points" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po6 = (input: any) => {
            if ("object" === typeof input.outer && null !== input.outer)
                $po7(input.outer);
            if (Array.isArray(input.inner))
                input.inner.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po7(elem);
                });
            for (const key of Object.keys(input)) {
                if ("outer" === key || "inner" === key || "type" === key)
                    continue;
                delete input[key];
            }
        };
        const $po7 = (input: any) => {
            if (Array.isArray(input.points))
                input.points.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            for (const key of Object.keys(input)) {
                if ("points" === key) continue;
                delete input[key];
            }
        };
        const $po8 = (input: any) => {
            if ("object" === typeof input.centroid && null !== input.centroid)
                $po2(input.centroid);
            for (const key of Object.keys(input)) {
                if ("centroid" === key || "radius" === key || "type" === key)
                    continue;
                delete input[key];
            }
        };
        const $pu0 = (input: any) =>
            (() => {
                if ("point" === input.type) return $po0(input);
                if ("line" === input.type) return $po1(input);
                if ("triangle" === input.type) return $po3(input);
                if ("rectangle" === input.type) return $po4(input);
                if ("polyline" === input.type) return $po5(input);
                if ("polygon" === input.type) return $po6(input);
                if ("circle" === input.type) return $po8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        if (Array.isArray(input))
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $pu0(elem);
            });
    };
    assert(input);
    prune(input);
    return input;
};
/**
 * Transformed {@link createIsPrune} function
 */
export const generate_is_prune = (input: any): input is ObjectUnionExplicit => {
    const is = (input: any): input is ObjectUnionExplicit => {
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            "number" === typeof input.p3.y &&
            "triangle" === input.type;
        const $io4 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            "number" === typeof input.p1.x &&
            "number" === typeof input.p1.y &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            "number" === typeof input.p2.x &&
            "number" === typeof input.p2.y &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            "number" === typeof input.p3.x &&
            "number" === typeof input.p3.y &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            "number" === typeof input.p4.x &&
            "number" === typeof input.p4.y &&
            "rectangle" === input.type;
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            "number" === typeof input.centroid.x &&
            "number" === typeof input.centroid.y &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
                    "object" === typeof elem && null !== elem && $iu0(elem),
            )
        );
    };
    const prune = (input: ObjectUnionExplicit): void => {
        const $throws = (typia.createIsPrune as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $po0 = (input: any) => {
            for (const key of Object.keys(input)) {
                if ("x" === key || "y" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            for (const key of Object.keys(input)) {
                if ("p1" === key || "p2" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po2 = (input: any) => {
            for (const key of Object.keys(input)) {
                if ("x" === key || "y" === key) continue;
                delete input[key];
            }
        };
        const $po3 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            if ("object" === typeof input.p3 && null !== input.p3)
                $po2(input.p3);
            for (const key of Object.keys(input)) {
                if (
                    "p1" === key ||
                    "p2" === key ||
                    "p3" === key ||
                    "type" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po4 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            if ("object" === typeof input.p3 && null !== input.p3)
                $po2(input.p3);
            if ("object" === typeof input.p4 && null !== input.p4)
                $po2(input.p4);
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
        const $po5 = (input: any) => {
            if (Array.isArray(input.points))
                input.points.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            for (const key of Object.keys(input)) {
                if ("points" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po6 = (input: any) => {
            if ("object" === typeof input.outer && null !== input.outer)
                $po7(input.outer);
            if (Array.isArray(input.inner))
                input.inner.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po7(elem);
                });
            for (const key of Object.keys(input)) {
                if ("outer" === key || "inner" === key || "type" === key)
                    continue;
                delete input[key];
            }
        };
        const $po7 = (input: any) => {
            if (Array.isArray(input.points))
                input.points.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            for (const key of Object.keys(input)) {
                if ("points" === key) continue;
                delete input[key];
            }
        };
        const $po8 = (input: any) => {
            if ("object" === typeof input.centroid && null !== input.centroid)
                $po2(input.centroid);
            for (const key of Object.keys(input)) {
                if ("centroid" === key || "radius" === key || "type" === key)
                    continue;
                delete input[key];
            }
        };
        const $pu0 = (input: any) =>
            (() => {
                if ("point" === input.type) return $po0(input);
                if ("line" === input.type) return $po1(input);
                if ("triangle" === input.type) return $po3(input);
                if ("rectangle" === input.type) return $po4(input);
                if ("polyline" === input.type) return $po5(input);
                if ("polygon" === input.type) return $po6(input);
                if ("circle" === input.type) return $po8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        if (Array.isArray(input))
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $pu0(elem);
            });
    };
    if (!is(input)) return false;
    prune(input);
    return true;
};
/**
 * Transformed {@link createValidatePrune} function
 */
export const generate_validate_prune = (
    input: any,
): typia.IValidation<ObjectUnionExplicit> => {
    const validate = (input: any): typia.IValidation<ObjectUnionExplicit> => {
        const errors = [] as any[];
        const $report = (typia.createValidatePrune as any).report(errors);
        ((
            input: any,
            path: string,
            exceptionable: boolean,
        ): input is ObjectUnionExplicit => {
            const $vo0 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ("number" === typeof input.x && !Number.isNaN(input.x)) ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && !Number.isNaN(input.y)) ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                    "point" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"point"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    "line" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"line"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ("number" === typeof input.x && !Number.isNaN(input.x)) ||
                        $report(exceptionable, {
                            path: path + ".x",
                            expected: "number",
                            value: input.x,
                        }),
                    ("number" === typeof input.y && !Number.isNaN(input.y)) ||
                        $report(exceptionable, {
                            path: path + ".y",
                            expected: "number",
                            value: input.y,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    "triangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"triangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo4 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.p1 && null !== input.p1) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        })) &&
                        $vo2(input.p1, path + ".p1", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p1",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p1,
                        }),
                    ((("object" === typeof input.p2 && null !== input.p2) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        })) &&
                        $vo2(input.p2, path + ".p2", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p2",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p2,
                        }),
                    ((("object" === typeof input.p3 && null !== input.p3) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        })) &&
                        $vo2(input.p3, path + ".p3", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p3",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p3,
                        }),
                    ((("object" === typeof input.p4 && null !== input.p4) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        })) &&
                        $vo2(input.p4, path + ".p4", true && exceptionable)) ||
                        $report(exceptionable, {
                            path: path + ".p4",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.p4,
                        }),
                    "rectangle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"rectangle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo5 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index2 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index2 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index2 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                    "polyline" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polyline"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo6 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.outer &&
                        null !== input.outer) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        })) &&
                        $vo7(
                            input.outer,
                            path + ".outer",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".outer",
                            expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                            value: input.outer,
                        }),
                    ((Array.isArray(input.inner) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        })) &&
                        input.inner
                            .map(
                                (elem: any, index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path + ".inner[" + index3 + "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPolyline>",
                                            value: elem,
                                        })) &&
                                        $vo7(
                                            elem,
                                            path + ".inner[" + index3 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".inner[" + index3 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPolyline>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".inner",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                            value: input.inner,
                        }),
                    "polygon" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"polygon"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vo7 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((Array.isArray(input.points) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        })) &&
                        input.points
                            .map(
                                (elem: any, index4: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(exceptionable, {
                                            path:
                                                path +
                                                ".points[" +
                                                index4 +
                                                "]",
                                            expected:
                                                "Resolve<ObjectUnionExplicit.IPoint>",
                                            value: elem,
                                        })) &&
                                        $vo2(
                                            elem,
                                            path + ".points[" + index4 + "]",
                                            true && exceptionable,
                                        )) ||
                                    $report(exceptionable, {
                                        path: path + ".points[" + index4 + "]",
                                        expected:
                                            "Resolve<ObjectUnionExplicit.IPoint>",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(exceptionable, {
                            path: path + ".points",
                            expected:
                                "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                            value: input.points,
                        }),
                ].every((flag: boolean) => flag);
            const $vo8 = (input: any, path: string, exceptionable: boolean) =>
                [
                    ((("object" === typeof input.centroid &&
                        null !== input.centroid) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        })) &&
                        $vo2(
                            input.centroid,
                            path + ".centroid",
                            true && exceptionable,
                        )) ||
                        $report(exceptionable, {
                            path: path + ".centroid",
                            expected: "Resolve<ObjectUnionExplicit.IPoint>",
                            value: input.centroid,
                        }),
                    ("number" === typeof input.radius &&
                        !Number.isNaN(input.radius)) ||
                        $report(exceptionable, {
                            path: path + ".radius",
                            expected: "number",
                            value: input.radius,
                        }),
                    "circle" === input.type ||
                        $report(exceptionable, {
                            path: path + ".type",
                            expected: '"circle"',
                            value: input.type,
                        }),
                ].every((flag: boolean) => flag);
            const $vu0 = (input: any, path: string, exceptionable: boolean) =>
                (() => {
                    if ("point" === input.type)
                        return $vo0(input, path, true && exceptionable);
                    if ("line" === input.type)
                        return $vo1(input, path, true && exceptionable);
                    if ("triangle" === input.type)
                        return $vo3(input, path, true && exceptionable);
                    if ("rectangle" === input.type)
                        return $vo4(input, path, true && exceptionable);
                    if ("polyline" === input.type)
                        return $vo5(input, path, true && exceptionable);
                    if ("polygon" === input.type)
                        return $vo6(input, path, true && exceptionable);
                    if ("circle" === input.type)
                        return $vo8(input, path, true && exceptionable);
                    return $report(exceptionable, {
                        path: path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: path + "",
                        expected:
                            'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $report(true, {
                                        path: path + "[" + index1 + "]",
                                        expected:
                                            '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                        value: elem,
                                    })) &&
                                    $vu0(
                                        elem,
                                        path + "[" + index1 + "]",
                                        true,
                                    )) ||
                                $report(true, {
                                    path: path + "[" + index1 + "]",
                                    expected:
                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: path + "",
                    expected:
                        'Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)>',
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as typia.IValidation<ObjectUnionExplicit>;
    };
    const prune = (input: ObjectUnionExplicit): void => {
        const $throws = (typia.createValidatePrune as any).throws;
        const $io0 = (input: any) =>
            "number" === typeof input.x &&
            "number" === typeof input.y &&
            "point" === input.type;
        const $io1 = (input: any) =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2) &&
            "line" === input.type;
        const $io2 = (input: any) =>
            "number" === typeof input.x && "number" === typeof input.y;
        const $io3 = (input: any) =>
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
        const $io4 = (input: any) =>
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
        const $io5 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            "polyline" === input.type;
        const $io6 = (input: any) =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io7(input.outer) &&
            Array.isArray(input.inner) &&
            input.inner.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io7(elem),
            ) &&
            "polygon" === input.type;
        const $io7 = (input: any) =>
            Array.isArray(input.points) &&
            input.points.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io2(elem),
            );
        const $io8 = (input: any) =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid) &&
            "number" === typeof input.radius &&
            "circle" === input.type;
        const $iu0 = (input: any) =>
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
        const $po0 = (input: any) => {
            for (const key of Object.keys(input)) {
                if ("x" === key || "y" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            for (const key of Object.keys(input)) {
                if ("p1" === key || "p2" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po2 = (input: any) => {
            for (const key of Object.keys(input)) {
                if ("x" === key || "y" === key) continue;
                delete input[key];
            }
        };
        const $po3 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            if ("object" === typeof input.p3 && null !== input.p3)
                $po2(input.p3);
            for (const key of Object.keys(input)) {
                if (
                    "p1" === key ||
                    "p2" === key ||
                    "p3" === key ||
                    "type" === key
                )
                    continue;
                delete input[key];
            }
        };
        const $po4 = (input: any) => {
            if ("object" === typeof input.p1 && null !== input.p1)
                $po2(input.p1);
            if ("object" === typeof input.p2 && null !== input.p2)
                $po2(input.p2);
            if ("object" === typeof input.p3 && null !== input.p3)
                $po2(input.p3);
            if ("object" === typeof input.p4 && null !== input.p4)
                $po2(input.p4);
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
        const $po5 = (input: any) => {
            if (Array.isArray(input.points))
                input.points.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            for (const key of Object.keys(input)) {
                if ("points" === key || "type" === key) continue;
                delete input[key];
            }
        };
        const $po6 = (input: any) => {
            if ("object" === typeof input.outer && null !== input.outer)
                $po7(input.outer);
            if (Array.isArray(input.inner))
                input.inner.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po7(elem);
                });
            for (const key of Object.keys(input)) {
                if ("outer" === key || "inner" === key || "type" === key)
                    continue;
                delete input[key];
            }
        };
        const $po7 = (input: any) => {
            if (Array.isArray(input.points))
                input.points.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po2(elem);
                });
            for (const key of Object.keys(input)) {
                if ("points" === key) continue;
                delete input[key];
            }
        };
        const $po8 = (input: any) => {
            if ("object" === typeof input.centroid && null !== input.centroid)
                $po2(input.centroid);
            for (const key of Object.keys(input)) {
                if ("centroid" === key || "radius" === key || "type" === key)
                    continue;
                delete input[key];
            }
        };
        const $pu0 = (input: any) =>
            (() => {
                if ("point" === input.type) return $po0(input);
                if ("line" === input.type) return $po1(input);
                if ("triangle" === input.type) return $po3(input);
                if ("rectangle" === input.type) return $po4(input);
                if ("polyline" === input.type) return $po5(input);
                if ("polygon" === input.type) return $po6(input);
                if ("circle" === input.type) return $po8(input);
                $throws({
                    expected:
                        '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                    value: input,
                });
            })();
        if (Array.isArray(input))
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $pu0(elem);
            });
    };
    const output = validate(input);
    if (output.success) prune(input);
    return output;
};
