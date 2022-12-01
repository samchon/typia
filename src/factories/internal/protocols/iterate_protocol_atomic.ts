import { IMetadataTag } from "../../../metadata/IMetadataTag";

import { Atomic } from "../../../typings/Atomic";

export const iterate_protocol_atomic =
    (tags: IMetadataTag[]) => (type: Atomic.Literal) => {
        if (type === "boolean") return "bool";
        else if (type === "number") return number(tags);
        else if (type === "bigint") return bigint(tags);
        else return "string";
    };

const number = (tagList: IMetadataTag[]) => {
    const filtered: IMetadataTag.INumberType[] = tagList.filter(
        (tag) => tag.kind === "type",
    ) as IMetadataTag.INumberType[];

    for (const { value } of filtered)
        if (value === "int") return "int32";
        else if (value === "uint") return "uint32";
    return "double";
};

const bigint = (tagList: IMetadataTag[]) => {
    const filtered: IMetadataTag.IBigintType[] = tagList.filter(
        (tag) =>
            tag.kind === "type" &&
            (tag.value === "int64" || tag.value === "uint64"),
    ) as IMetadataTag.IBigintType[];

    for (const { value } of filtered)
        if (value === "int64" || value === "uint64") return value;
    return "int64";
};
