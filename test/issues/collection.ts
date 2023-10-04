import typia, { IJsonApplication } from "typia";

const app = typia.json.application<[IJsonApplication]>();
console.log(Object.keys(app.components.schemas ?? {}));
