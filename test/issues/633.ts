import typia from "typia";

interface IObject {
    /**
     * @summary You know what?
     *
     * Tag in description like {@link https://example.com link} tag.
     *
     * @weird
     * @duplicated
     * @yaho
     */
    weird: string;
}

const app: typia.IJsonApplication = typia.application<[IObject]>();
const objects = Object.values(app.components.objects);
console.log(
    objects.map((o) =>
        Object.entries(o.properties).map(([k, v]) => [k, v.description ?? ""]),
    ),
);
