import { DocumentType, getModelForClass, prop } from "@typegoose/typegoose";
import typia from "typia";

class KitchenClass {
  @prop()
  name?: string;
}
const KitcenModel = getModelForClass(KitchenClass);

async function main(): Promise<void> {
  const model = await KitcenModel.create({ name: "Kitty" });
  const document: DocumentType<KitchenClass> = model;

  typia.assert(model);
  typia.assert(document);
}
main().catch((exp) => {
  console.log(exp);
  process.exit(-1);
});
