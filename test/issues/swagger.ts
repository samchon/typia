import typia from "typia";

/**
 * Some description.
 *
 * @title something
 */
interface Interface {
    value: number;
}

/**
 * Some description.
 *
 * @title something
 */
interface Type {
    value: number;
}

const app = typia.json.application<[Interface, Type]>();
console.log({
    interface: {
        description: app.components.schemas?.Interface?.description,
        tags: app.components.schemas?.Interface?.["x-typia-jsDocTags"],
    },
    type: {
        description: app.components.schemas?.Type?.description,
        tags: app.components.schemas?.Type?.["x-typia-jsDocTags"],
    },
});
