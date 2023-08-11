export function protobuf_equal_to<Instance>(
    x: Instance,
    y: Instance,
    tracer?: { value?: string },
): boolean {
    return recursive_equal_to(x, y, "$input", tracer);
}

function object_equal_to<T extends object>(
    x: T,
    y: T,
    path: string,
    tracer?: { value?: string },
): boolean {
    return Object.entries(x).every(([key, value]) => {
        return recursive_equal_to(
            value,
            (y as any)[key],
            `${path}.${key}`,
            tracer,
        );
    });
}

function array_equal_to<T>(
    x: T[],
    y: T[],
    path: string,
    tracer?: { value?: string },
): boolean {
    if (x.length !== y.length)
        return trace(x.length, y.length, `${path}.length`, tracer);
    return x.every((value, index) => {
        return recursive_equal_to(value, y[index], `${path}[${index}]`, tracer);
    });
}

function recursive_equal_to<T>(
    x: T,
    y: T,
    path: string,
    tracer?: { value?: string },
): boolean {
    if ((x ?? null) === (y ?? null)) return true;

    const type = typeof x;
    if (type !== typeof y) return trace(x, y, path, tracer);
    else if (type === "object")
        if (x === null) return trace(x, y, path, tracer);
        else if (x instanceof Array)
            return array_equal_to(x, y as typeof x, path, tracer);
        else
            return object_equal_to(
                (<any>x) as object,
                (<any>y) as object,
                path,
                tracer,
            );
    else if (type !== "function") return trace(x, y, path, tracer);
    else return trace(x, y, path, tracer);
}

function trace(
    x: any,
    y: any,
    _path: string,
    _tracer?: { value?: string },
): boolean {
    // if (x !== y) {
    //     console.log({ x, y, path, typeofX: typeof x, typeofY: typeof y });
    //     if (tracer) tracer.value = path;
    // }
    return x === y;
}
