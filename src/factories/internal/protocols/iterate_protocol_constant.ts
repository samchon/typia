import { MetadataConstant } from "../../../schemas/metadata/MetadataConstant";

export const iterate_protocol_constant = ({
    type,
    values,
}: MetadataConstant) => {
    if (type === "boolean") return "bool";
    else if (type === "number") return number(values);
    else if (type === "bigint") return bigint(values);
    else return "string";
};

const bigint = (values: bigint[]): string => {
    return values.every((v) => v >= BigInt(0)) ? "uint64" : "int64";
};

const number = (values: number[]): string => {
    return values.some((v) => Math.floor(v) !== v)
        ? "double"
        : values.every((v) => v >= 0)
        ? values.every((v) => v <= 2 ** 64 - 1)
            ? "uint32"
            : "uint64"
        : values.every((v) => -(2 ** 31) <= v && v <= 2 ** 31 - 1)
        ? "int32"
        : "int64";
};
