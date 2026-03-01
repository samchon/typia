import { TestValidator } from "@nestia/e2e";
import typia, { IMetadataSchemaCollection } from "typia";

export const test_reflect_schemas_components = (): void => {
  interface IBase {
    id: number;
  }
  interface IChild extends IBase {
    name: string;
    parent?: IChild;
  }

  const collection: IMetadataSchemaCollection = typia.reflect.schemas<
    [IBase, IChild]
  >();

  TestValidator.equals("schemas count", collection.schemas.length, 2);

  // components has both types
  TestValidator.predicate("has IBase", () =>
    collection.components.objects.some((o) => o.name === "IBase"),
  );
  TestValidator.predicate("has IChild", () =>
    collection.components.objects.some((o) => o.name === "IChild"),
  );

  // check recursive type
  const child = collection.components.objects.find((o) => o.name === "IChild");
  TestValidator.predicate("IChild is recursive", () => child?.recursive === true);

  // check IChild has parent property
  TestValidator.predicate("IChild has parent property", () => {
    if (!child) return false;
    return child.properties.some((p) => {
      const key = p.key;
      if (key.constants.length > 0 && key.constants[0]?.type === "string") {
        return key.constants[0].values[0]?.value === "parent";
      }
      return false;
    });
  });
};
