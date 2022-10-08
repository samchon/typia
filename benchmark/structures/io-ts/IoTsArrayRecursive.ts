import * as t from "io-ts";

import { ArrayRecursive } from "../../../test/structures/ArrayRecursive";

const Timestamp = t.type({
    time: t.number,
    zone: t.number,
});

const Category: t.Type<ArrayRecursive.ICategory> = t.recursion("Category", () =>
    t.type({
        children: t.array(Category),
        id: t.number,
        code: t.string,
        sequence: t.number,
        created_at: Timestamp,
    }),
);

export const IoTsArrayRecursive = Category;
