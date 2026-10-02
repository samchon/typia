import typia from "typia";

type Text = string;
type SchemaURL = string;
type DateTime = string;

type SchemaValue<T, TProperty extends string> =
  | T
  | Role<T, TProperty>
  | readonly (T | Role<T, TProperty>)[];

interface ThingBase {
  "@id"?: SchemaValue<SchemaURL, "@id">;
  name?: SchemaValue<Text, "name">;
  alternateName?: SchemaValue<Text, "alternateName">;
}

interface RoleBase extends ThingBase {
  endDate?: SchemaValue<Date | DateTime, "endDate">;
  namedPosition?: SchemaValue<Text | SchemaURL, "namedPosition">;
  roleName?: SchemaValue<Text | SchemaURL, "roleName">;
  startDate?: SchemaValue<Date | DateTime, "startDate">;
}

type RoleLeaf<TContent, TProperty extends string> = RoleBase & {
  "@type": "Role";
} & {
  [key in TProperty]: TContent;
};

type LinkRole<TContent, TProperty extends string> = RoleBase & {
  "@type": "LinkRole";
  url?: SchemaValue<SchemaURL, "url">;
} & {
  [key in TProperty]: TContent;
};

type OrganizationRole<TContent, TProperty extends string> = RoleBase & {
  "@type": "OrganizationRole";
  memberOf?: SchemaValue<Organization, "memberOf">;
} & {
  [key in TProperty]: TContent;
};

type PerformanceRole<TContent, TProperty extends string> = RoleBase & {
  "@type": "PerformanceRole";
  performanceIn?: SchemaValue<Event, "performanceIn">;
} & {
  [key in TProperty]: TContent;
};

type Role<TContent = never, TProperty extends string = never> =
  | RoleLeaf<TContent, TProperty>
  | LinkRole<TContent, TProperty>
  | OrganizationRole<TContent, TProperty>
  | PerformanceRole<TContent, TProperty>;

interface Recipe extends ThingBase {
  "@type": "Recipe";
  author?: SchemaValue<Person | Organization, "author">;
  image?: SchemaValue<SchemaURL, "image">;
  recipeIngredient?: SchemaValue<Text, "recipeIngredient">;
  recipeInstructions?: SchemaValue<HowToStep | Text, "recipeInstructions">;
  mainEntityOfPage?: SchemaValue<Article, "mainEntityOfPage">;
  publisher?: SchemaValue<Organization, "publisher">;
  aggregateRating?: SchemaValue<Rating, "aggregateRating">;
  video?: SchemaValue<VideoObject, "video">;
  keywords?: SchemaValue<Text, "keywords">;
}

interface Person extends ThingBase {
  "@type": "Person";
  email?: SchemaValue<Text, "email">;
  affiliation?: SchemaValue<Organization, "affiliation">;
}

interface Organization extends ThingBase {
  "@type": "Organization";
  url?: SchemaValue<SchemaURL, "url">;
  member?: SchemaValue<Person, "member">;
}

interface HowToStep extends ThingBase {
  "@type": "HowToStep";
  text?: SchemaValue<Text, "text">;
}

interface Article extends ThingBase {
  "@type": "Article";
  headline?: SchemaValue<Text, "headline">;
  author?: SchemaValue<Person | Organization, "author">;
}

interface Rating extends ThingBase {
  "@type": "Rating";
  ratingValue?: SchemaValue<number | Text, "ratingValue">;
  bestRating?: SchemaValue<number | Text, "bestRating">;
}

interface VideoObject extends ThingBase {
  "@type": "VideoObject";
  contentUrl?: SchemaValue<SchemaURL, "contentUrl">;
  thumbnailUrl?: SchemaValue<SchemaURL, "thumbnailUrl">;
}

interface Event extends ThingBase {
  "@type": "Event";
  startDate?: SchemaValue<Date | DateTime, "startDate">;
  organizer?: SchemaValue<Person | Organization, "organizer">;
}

type Timestamp = Date;
type RoleNameSet = Set<Text>;
type ScoreMap = Map<Text, number>;

const validateRecipe = typia.createValidate<Recipe>();
const validateTimestamp = typia.createValidate<Timestamp>();
const validateRoleNameSet = typia.createValidate<RoleNameSet>();
const validateScoreMap = typia.createValidate<ScoreMap>();
const fixture = {
  validateRecipe,
  validateTimestamp,
  validateRoleNameSet,
  validateScoreMap,
};

/**
 * Verifies schema dts role in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original schemaDtsRoleSource
 * declarations; the former schemaDtsRoleRuntimeRunner observations execute in
 * the existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from schemaDtsRoleRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Schema-dts-like Recipe and conditional Role interfaces require the selected nested members. Authored valid nested roles and Date startDate accept; missing selected members, numeric ingredient elements and numeric nested email reject. Separate Date, Set and Map aliases remain runtime-native controls.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_schema_dts_role in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed schemaDtsRoleSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/schema_dts_role_transform_test.go schemaDtsRoleRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_schema_dts_role = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const capture: any = (task: any): any => {
    try {
      task();
      return null;
    } catch (error: any) {
      return error;
    }
  };

  const validRecipe: any = {
    "@type": "Recipe",
    name: "Layer cake",
    author: {
      "@type": "Role",
      roleName: "chef",
      startDate: new Date("2026-06-11T00:00:00.000Z"),
      author: {
        "@type": "Person",
        name: "Alice",
        email: "alice@example.com",
      },
    },
    image: [
      "https://example.com/cake.jpg",
      {
        "@type": "LinkRole",
        roleName: "primary image",
        url: "https://example.com",
        image: "https://example.com/cake-2.jpg",
      },
    ],
    recipeIngredient: [
      "flour",
      {
        "@type": "Role",
        roleName: "main ingredient",
        recipeIngredient: "sugar",
      },
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Mix",
      },
      {
        "@type": "PerformanceRole",
        performanceIn: {
          "@type": "Event",
          name: "Bake-off",
          organizer: {
            "@type": "Organization",
            name: "Kitchen",
          },
        },
        recipeInstructions: {
          "@type": "HowToStep",
          text: "Bake",
        },
      },
    ],
    mainEntityOfPage: {
      "@type": "Article",
      headline: "Cake",
      author: {
        "@type": "Person",
        name: "Bob",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Recipe Lab",
      member: [
        {
          "@type": "Person",
          name: "Carol",
        },
      ],
    },
    aggregateRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: "5",
    },
    video: {
      "@type": "VideoObject",
      contentUrl: "https://example.com/cake.mp4",
      thumbnailUrl: "https://example.com/cake.png",
    },
    keywords: ["dessert", "cake"],
  };

  const valid: any = mod.validateRecipe(validRecipe);
  if (valid.success !== true) {
    throw new Error(
      "schema-dts Recipe shape failed validate: " + JSON.stringify(valid),
    );
  }

  const invalidCases: any = [
    [
      "role without selected property",
      {
        "@type": "Recipe",
        author: {
          "@type": "Role",
          roleName: "chef",
        },
      },
    ],
    [
      "array branch with invalid primitive",
      {
        "@type": "Recipe",
        recipeIngredient: ["flour", 1],
      },
    ],
    [
      "nested object with invalid field",
      {
        "@type": "Recipe",
        author: {
          "@type": "Role",
          author: {
            "@type": "Person",
            email: 1,
          },
        },
      },
    ],
  ];

  for (const [name, input] of invalidCases) {
    const result: any = mod.validateRecipe(input);
    if (result.success !== false) {
      throw new Error(
        name + " unexpectedly passed validate: " + JSON.stringify(result),
      );
    }
  }

  if (
    mod.validateTimestamp(new Date("2026-06-11T00:00:00.000Z")).success !== true
  ) {
    throw new Error("Date alias failed valid timestamp");
  }
  if (mod.validateTimestamp("2026-06-11T00:00:00.000Z").success !== false) {
    throw new Error("Date alias accepted a string timestamp");
  }

  if (mod.validateRoleNameSet(new Set(["chef", "writer"])).success !== true) {
    throw new Error("Set alias failed valid string set");
  }
  if (mod.validateRoleNameSet(new Set(["chef", 1])).success !== false) {
    throw new Error("Set alias accepted an invalid element");
  }

  if (mod.validateScoreMap(new Map([["quality", 5]])).success !== true) {
    throw new Error("Map alias failed valid score map");
  }
  if (mod.validateScoreMap(new Map([[1, "bad"]])).success !== false) {
    throw new Error("Map alias accepted invalid key/value types");
  }

  void capture;
};
