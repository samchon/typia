import typia from "typia";

interface ISomething {
    value: number;
}
type P = Partial<ISomething> & { next: string };

const app = typia.metadata<[P]>();
console.log(
    app.collection.objects[0]?.properties.map((p) => ({
        name: p.key.constants[0]?.values[0],
        optional: p.value.optional,
        required: p.value.required,
        nullable: p.value.nullable,
    })),
);
