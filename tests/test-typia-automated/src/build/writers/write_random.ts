import { StringUtil } from "@typia/template";

export const write_random = (create: boolean) => (structure: string) =>
  StringUtil.trim`
    import { ${structure} } from "@typia/template";
    import typia from "typia";

    import { _test_random } from "../../internal/_test_random";

    export const test_${method(
      create,
    )}_${structure} = (): void => _test_random("${structure}")<${structure}>(
        ${structure}
    )({
      random: ${functor(create)(structure)},
      assert: typia.createAssert<${structure}>(),
    });
    `;

const method = (create: boolean) => (create ? "createRandom" : "random");
const functor = (create: boolean) => (structure: string) =>
  create
    ? `typia.createRandom<${structure}>((${structure} as any).RANDOM)`
    : `() => typia.random<${structure}>((${structure} as any).RANDOM)`;
