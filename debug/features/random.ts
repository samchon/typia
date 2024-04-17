import typia from "typia";

new Array(1_000).fill(0).forEach(() => {
  const app = typia.random<typia.IJsonApplication>();
  const result = typia.validate(app);
  if (result.success === false)
    console.log(JSON.stringify(result.errors, null, 2));
});
console.log("completed");
