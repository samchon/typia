import typia from "typia";

interface Something {
    required: string;
    optional?: number;
    undefindable: boolean | undefined;
    both?: string | undefined;
    nullable: Something | null;
}

const app = typia.reflect.metadata<[Something]>();
console.log(
    app.components.objects[0]?.properties.map((p) => ({
        name: p.key.constants[0]?.values[0],
        optional: p.value.optional,
        required: p.value.required,
        nullable: p.value.nullable,
    })),
);
