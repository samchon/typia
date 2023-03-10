export function primitive_equal_to<Instance>(
    x: Instance,
    y: Instance,
): boolean {
    return recursive_equal_to(x, y, "$input");
}

function object_equal_to<T extends object>(x: T, y: T, path: string): boolean {
    return Object.entries(x).every(([key, value]) => {
        return recursive_equal_to(value, (y as any)[key], `${path}.${key}`);
    });
}

function array_equal_to<T>(x: T[], y: T[], path: string): boolean {
    if (x.length !== y.length)
        return trace(x.length, y.length, `${path}.length`);
    return x.every((value, index) => {
        return recursive_equal_to(value, y[index], `${path}[${index}]`);
    });
}

function recursive_equal_to<T>(x: T, y: T, path: string): boolean {
    const type = typeof x;
    if (type !== typeof y) return trace(x, y, path);
    else if (type === "object")
        if (x === null) return trace(x, y, path);
        else if (x instanceof Array)
            return array_equal_to(x, y as typeof x, path);
        else
            return object_equal_to(
                (<any>x) as object,
                (<any>y) as object,
                path,
            );
    else if (type !== "function") return trace(x, y, path);
    else return trace(x, y, path);
}

function trace(x: any, y: any, path: string): boolean {
    if (x !== y) console.log(x, y, path);
    return x === y;
}
