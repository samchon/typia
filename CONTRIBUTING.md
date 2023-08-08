# Contribution Guide
## To Publish an issue
Thanks for your advise. Before publishing an issue, please check some components.

### 1. Search for duplicates
Before publishing an issue, please check whether the duplicated issue exists or not.

  - [Ordinary Issues](https://github.com/samchon/typia/issues)

### 2. Did you find a bug?
When you reporting a bug, then please write about those items:

  - What version you're using
  - If possible, give me an isolated way to reproduce the behavior.
  - The behavior your expect to see, and the actual behavior.

### 3. Do you have a suggestion?
I always welcome your suggestion. When you publishing a suggestion, then please write such items: 

  - A description of the problem you're trying to solve.
  - An overview of the suggested solution.
  - Examples of how the suggestion would work in various places.
    - Code examples showing the expected behavior.




## Contributing Code
### Test your code
Before sending a pull request, please test your new code. Please run the following commands:

```bash
# COMPILE
npm run build

# PREPARE
npm run test:generate

# DO TEST
npm run test
```

If you succeeded to compile, but failed to pass the test-automation, then *debug* the test-automation module. I've configured the `.vscode/launch.json`. You just run the `VSCode` and click the `Start Debugging` button or press `F5` key. By the *debugging*, find the reason why the *test* is failed and fix it.

### Adding a Test
If you want to add a testing-logic, then goto the `src/test` directory. It's the directory containing the test-automation module. Declare some functions starting from the prefix `test_`. Then, they will be called after the next testing.

Note that, the special functions starting from the prefix `test_` must be `export`ed. They also must return one of them:
  - `void`
  - `Promise<void>`

When you detect an error, then throw exception such below:

```typescript
import typia from "typia"
import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

export function test_stringify_object_recursive(): void
{
    const department: IDepartment = {
        name: RandomGenerator.string(),
        parent: {
            name: RandomGenerator.string(),
            parent: {
                name: RandomGenerator.string(),
                parent: null
            }
        }
    };

    const json: string = typia.json.stringify<IDepartment>(department);
    const expected: string = JSON.stringify(department);

    if (json !== expected)
        throw new Error("Bug on typia.json.stringify(): failed to understand the recursive object.");
}

interface IDepartment
{
    name: string;
    parent: IDepartment | null;
}
```



## Sending a Pull Request
Thanks for your contributing. Before sending a pull request to me, please check those components.

### 1. Include enough descriptions
When you send a pull request, please include a description, of what your change intends to do, on the content. Title, make it clear and simple such below:

  - Refactor features
  - Fix #17
  - Add tests for #28

### 2. Include adequate tests
As I've mentioned in the `Contributing Code` section, your PR should pass the test-automation module. If your PR includes *new features* that have not being handled in the ordinary test-automation module, then also update *add the testing unit* please.

If there're some specific reasons that could not pass the test-automation (not error but *intended*), then please update the ordinary test-automation module or write the reasons on your PR content and *const me update the test-automation module*.




## References
I've referenced contribution guidance of the TypeScript.
  - https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md