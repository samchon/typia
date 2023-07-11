import typia from "typia";

type ISetupConfig =
    | ({
          type: "Main";
      } & ISetupConfigMain)
    | ({
          type: "Before";
      } & ISetupConfigBefore)
    | ({
          type: "After";
      } & ISetupConfigAfter);

type ISetupConfigMain = {
    content: ISetupConfig;
};

type ISetupConfigBefore = {
    content: ISetupConfig;
};

type ISetupConfigAfter = {
    content: ISetupConfig;
};

typia.createIs<ISetupConfig>();
