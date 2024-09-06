import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

class Parent {
  public toJSON(): Child {
    return new Child();
  }
}
class Child {
  public readonly id: number = 1;
  public readonly flag: boolean = true;

  public toJSON(): IBrand {
    return {
      code: "code",
      name: "name",
    };
  }
}
interface IBrand {
  code: string;
  name: string;
}

const schema: ILlmSchema = typia.llm.schema<Parent>();
console.log(schema);
