import typia, { IJsonComponents } from "typia";

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

const app: typia.IJsonApplication = typia.json.application<[IObject]>();
const objects = Object.values(app.components.schemas ?? {});
console.log(
  objects.map((o) =>
    Object.entries((o as IJsonComponents.IObject).properties).map(([k, v]) => [
      k,
      v.description ?? "",
    ]),
  ),
);
