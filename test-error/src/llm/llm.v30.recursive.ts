import typia from "typia";

interface IHierarchical {
  children: IHierarchical[];
}
interface IReference {
  parent: IReference | null;
}

// SCHEMA
typia.llm.schema<
  IHierarchical,
  "3.0",
  {
    recursive: false;
  }
>();
typia.llm.schema<
  IReference,
  "3.0",
  {
    recursive: false;
  }
>();
typia.llm.schema<
  IHierarchical,
  "3.0",
  {
    recursive: 0;
  }
>();
typia.llm.schema<
  IReference,
  "3.0",
  {
    recursive: 0;
  }
>();

// PARAMETERS
typia.llm.parameters<
  {
    x: IHierarchical;
  },
  "3.0",
  {
    recursive: false;
  }
>();
typia.llm.parameters<
  {
    x: IReference;
  },
  "3.0",
  {
    recursive: false;
  }
>();
typia.llm.parameters<
  {
    x: IHierarchical;
  },
  "3.0",
  {
    recursive: 0;
  }
>();
typia.llm.parameters<
  {
    x: IReference;
  },
  "3.0",
  {
    recursive: 0;
  }
>();

// APPLICATION
typia.llm.application<
  {
    insert(props: { x: IHierarchical }): void;
  },
  "3.0",
  {
    recursive: false;
  }
>();
typia.llm.application<
  {
    insert(props: { x: IReference }): void;
  },
  "3.0",
  {
    recursive: false;
  }
>();
typia.llm.application<
  {
    insert(props: { x: IHierarchical }): void;
  },
  "3.0",
  {
    recursive: 0;
  }
>();
typia.llm.application<
  {
    insert(props: { x: IReference }): void;
  },
  "3.0",
  {
    recursive: 0;
  }
>();
