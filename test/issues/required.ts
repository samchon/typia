import typia from "typia";

interface ISomething {
    value?: number;
}
type P = Required<ISomething>;

const value =
    typia.reflect.metadata<[P]>().components.objects[0]?.properties[0]?.value;
console.log({
    optional: value?.optional,
    required: value?.required,
});
