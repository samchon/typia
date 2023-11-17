import fs from "fs";
import typia from "typia";

type MyInterface = {
  /**
   * @type {Array<MyInterface>}
   * @memberof MyInterface
   */
  list: MyInterface[];
};

const func = typia.createAssert<MyInterface[]>();
fs.writeFileSync(__dirname + "/704.js", func.toString());
