import typia from "typia";

export function test_issue_438_primitve_object_type(): void {
    type X = object;
    type Y = X;
    type Z = Y;
    type Type = {};
    interface Interface {}
    class Class {}

    const meta = typia.metadata<[X, Y, Z, Type, Interface, Class]>();
    if (
        meta.collection.length !== 4 ||
        meta.collection.some((o) => o.properties.length !== 0)
    )
        throw new Error(
            "Bug on issue #438: failed to understand primitive object type",
        );
}
