import { IMetadataTag } from "../../../metadata/IMetadataTag";

import { Atomic } from "../../../typings/Atomic";

export const iterate_protocol_atomic =
    (adder: (type: string) => void) =>
    (tags: IMetadataTag[]) =>
    (atomics: Atomic.Literal[]) => {
        for (const type of atomics)
            if (type === "boolean") adder("bool");
            else if (type === "number") number(adder)(tags);
            else if (type === "bigint") bigint(adder)(tags);
            else adder("string");
    };

const number = (adder: (type: string) => void) => (tagList: IMetadataTag[]) => {
    const filtered: IMetadataTag.INumberType[] = tagList.filter(
        (tag) => tag.kind === "type",
    ) as IMetadataTag.INumberType[];

    if (filtered.length === 0) {
        adder("double");
        return;
    }
    for (const { value } of filtered)
        if (value === "int") adder("int32");
        else if (value === "uint") adder("uint32");
};

const bigint = (adder: (type: string) => void) => (tagList: IMetadataTag[]) => {
    const filtered: IMetadataTag.IBigintType[] = tagList.filter(
        (tag) =>
            tag.kind === "type" &&
            (tag.value === "int64" || tag.value === "uint64"),
    ) as IMetadataTag.IBigintType[];

    if (filtered.length === 0) {
        adder("int64");
        return;
    }
    for (const { value } of filtered)
        if (value === "int64" || value === "uint64") adder(value);
};
