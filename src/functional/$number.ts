export function $number(value: number): number {
    if (!isFinite(value))
        throw new Error("Error on TSON.stringify(): infinite number.");
    else if (isNaN(value))
        throw new Error("Error on TSON.stringify(): Not-a-Number.");
    return value;
}
