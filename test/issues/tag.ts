import typia, { IJsonComponents } from "typia";

interface Something {
    /**
     * @type {int}
     */
    int: number;

    /**
     * @type {uint}
     */
    uint: number;
}

// console.log(
//     typia
//         .metadata<[Something]>()
//         .collection.objects[0].properties.map((p) =>
//             JSON.stringify([p.tags, p.jsDocTags], null, 4),
//         ),
// );

const props = Object.values(
    (
        typia.application<[Something]>().components.schemas
            ?.Something as IJsonComponents.IObject
    ).properties!,
);
console.log(
    JSON.stringify(
        props.map((p) => [
            (p as any).type,
            p["x-typia-metaTags"],
            p["x-typia-jsDocTags"],
        ]),
        null,
        4,
    ),
);
