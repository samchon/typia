import typia from "typia";

interface ISomething {
    id: string;

    /**
     * @hidden
     */
    authority: number;
}
const app: typia.IJsonApplication = typia.json.application<
    [ISomething],
    "ajv"
>();
const object: typia.IJsonComponents.IObject = (app.components.schemas ?? {})
    .ISomething as typia.IJsonComponents.IObject;
console.log(Object.keys(object.properties)); // ["id"]
