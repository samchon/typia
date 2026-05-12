import process from "node:process";
import {
  defineConfig,
  type Provider,
  type Sponsorship,
} from "sponsorkit";

const OPEN_COLLECTIVE_SLUGS = ["typia", "nestia", "tstl"] as const;

const OC_API = "https://api.opencollective.com/graphql/v2/";
const GH_API = "https://api.github.com/graphql";

interface OcSocialLink {
  type: string;
  url: string;
}

interface OcAccount {
  id: string;
  slug: string;
  name: string;
  type: string;
  isIncognito: boolean;
  imageUrl: string;
  socialLinks?: OcSocialLink[];
}

interface OcOrder {
  id: string;
  frequency: "ONETIME" | "MONTHLY" | "YEARLY" | string;
  status: string;
  createdAt: string;
  amount: { value: number };
  totalDonations?: { value: number };
  tier?: { name?: string };
  fromAccount: OcAccount;
}

const GITHUB_RE = /github\.com\/([^/]+)/i;

function getSocialLogins(
  links: OcSocialLink[] | undefined,
  ocLogin: string,
): Record<string, string> {
  const result: Record<string, string> = { opencollective: ocLogin };
  for (const link of links ?? []) {
    if (link.type === "GITHUB") {
      const m = link.url.match(GITHUB_RE);
      if (m?.[1]) result.github = m[1];
    }
  }
  return result;
}

function getBestUrl(links: OcSocialLink[] | undefined): string | undefined {
  const priority = [
    "WEBSITE",
    "GITHUB",
    "GITLAB",
    "TWITTER",
    "LINKEDIN",
    "FACEBOOK",
    "YOUTUBE",
    "INSTAGRAM",
    "DISCORD",
    "TUMBLR",
  ];
  for (const t of priority) {
    const hit = links?.find((l) => l.type === t);
    if (hit?.url) return hit.url;
  }
  return undefined;
}

function getAccountType(t: string): "User" | "Organization" {
  return t === "INDIVIDUAL" ? "User" : "Organization";
}

async function fetchOpenCollectiveOrders(
  key: string,
  slug: string,
): Promise<OcOrder[]> {
  const orders: OcOrder[] = [];
  let offset = 0;
  while (true) {
    const query = `{
      account(slug: "${slug}") {
        orders(limit: 1000, offset: ${offset}, filter: INCOMING) {
          totalCount
          nodes {
            id
            createdAt
            frequency
            status
            tier { name }
            amount { value }
            totalDonations { value }
            fromAccount {
              id
              slug
              name
              type
              isIncognito
              imageUrl(height: 460, format: png)
              socialLinks { url type }
            }
          }
        }
      }
    }`;
    const res = await fetch(OC_API, {
      method: "POST",
      headers: {
        "Api-Key": key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    if (!res.ok) {
      throw new Error(
        `OpenCollective fetch failed for ${slug}: ${res.status} ${res.statusText}`,
      );
    }
    const json = (await res.json()) as {
      data?: {
        account?: {
          orders?: { totalCount: number; nodes: OcOrder[] };
        };
      };
      errors?: unknown;
    };
    if (json.errors) {
      throw new Error(
        `OpenCollective GraphQL error for ${slug}: ${JSON.stringify(json.errors)}`,
      );
    }
    const page = json.data?.account?.orders;
    if (!page) break;
    orders.push(...page.nodes);
    if (page.nodes.length === 0 || orders.length >= page.totalCount) break;
    offset += page.nodes.length;
  }
  return orders;
}

function makeOpenCollectiveProvider(slug: string): Provider {
  return {
    name: `opencollective:${slug}`,
    async fetchSponsors() {
      const key = process.env.SPONSORKIT_OPENCOLLECTIVE_KEY;
      if (!key)
        throw new Error("SPONSORKIT_OPENCOLLECTIVE_KEY is required");

      const orders = await fetchOpenCollectiveOrders(key, slug);

      // Aggregate per fromAccount — same person across multiple orders to the
      // same collective should be summed.
      const byAccount = new Map<string, Sponsorship>();
      for (const o of orders) {
        if (o.fromAccount.slug === "github-sponsors") continue;
        // Subscriptions expose lifetime via totalDonations; one-time orders
        // collapse to the single payment amount.
        const lifetime = o.totalDonations?.value ?? o.amount.value;
        if (lifetime <= 0) continue;

        const id = o.fromAccount.id;
        const existing = byAccount.get(id);
        if (existing) {
          existing.monthlyDollars += lifetime;
          if (
            o.createdAt &&
            (!existing.createdAt || o.createdAt < existing.createdAt)
          )
            existing.createdAt = o.createdAt;
          continue;
        }

        byAccount.set(id, {
          sponsor: {
            type: getAccountType(o.fromAccount.type),
            login: o.fromAccount.slug,
            name: o.fromAccount.name,
            avatarUrl: o.fromAccount.imageUrl,
            websiteUrl: getBestUrl(o.fromAccount.socialLinks),
            linkUrl: `https://opencollective.com/${o.fromAccount.slug}`,
            socialLogins: getSocialLogins(
              o.fromAccount.socialLinks,
              o.fromAccount.slug,
            ),
          },
          monthlyDollars: lifetime,
          isOneTime: o.frequency === "ONETIME",
          privacyLevel: o.fromAccount.isIncognito ? "PRIVATE" : "PUBLIC",
          tierName: o.tier?.name,
          createdAt: o.createdAt,
        });
      }
      return [...byAccount.values()];
    },
  };
}

interface GhSponsorshipNode {
  createdAt: string;
  privacyLevel: "PUBLIC" | "PRIVATE";
  isActive: boolean;
  tier: {
    name: string;
    isOneTime: boolean;
    monthlyPriceInDollars: number;
  } | null;
  sponsorEntity: {
    __typename: "User" | "Organization";
    login: string;
    name: string | null;
    avatarUrl: string;
    websiteUrl: string | null;
  };
}

async function fetchGitHubSponsorNodes(
  token: string,
  login: string,
): Promise<GhSponsorshipNode[]> {
  const nodes: GhSponsorshipNode[] = [];
  let cursor: string | null = null;
  while (true) {
    const query = `{
      user(login: "${login}") {
        sponsorshipsAsMaintainer(activeOnly: false, first: 100${cursor ? `, after: "${cursor}"` : ""}) {
          pageInfo { endCursor hasNextPage }
          nodes {
            createdAt
            privacyLevel
            isActive
            tier { name isOneTime monthlyPriceInDollars }
            sponsorEntity {
              __typename
              ... on Organization { login name avatarUrl websiteUrl }
              ... on User { login name avatarUrl websiteUrl }
            }
          }
        }
      }
    }`;
    const res = await fetch(GH_API, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "sponsorkit-typia",
      },
      body: JSON.stringify({ query }),
    });
    if (!res.ok)
      throw new Error(`GitHub fetch failed: ${res.status} ${res.statusText}`);
    const json = (await res.json()) as {
      data?: {
        user?: {
          sponsorshipsAsMaintainer: {
            pageInfo: { endCursor: string | null; hasNextPage: boolean };
            nodes: GhSponsorshipNode[];
          };
        };
      };
      errors?: { type?: string; message?: string }[];
    };
    if (json.errors?.length) {
      const scope = json.errors.find((e) => e.type === "INSUFFICIENT_SCOPES");
      if (scope)
        throw new Error(
          "GitHub token missing `read:user` and/or `read:org` scopes",
        );
      throw new Error(`GitHub API error: ${JSON.stringify(json.errors)}`);
    }
    const page = json.data?.user?.sponsorshipsAsMaintainer;
    if (!page) break;
    nodes.push(...page.nodes);
    if (!page.pageInfo.hasNextPage) break;
    cursor = page.pageInfo.endCursor;
  }
  return nodes;
}

function monthsBetween(start: Date, end: Date): number {
  // Inclusive count of months between two dates (always ≥ 1).
  return Math.max(
    1,
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
      (end.getUTCMonth() - start.getUTCMonth()) +
      1,
  );
}

const githubProvider: Provider = {
  name: "github",
  async fetchSponsors() {
    const token = process.env.SPONSORKIT_GITHUB_TOKEN;
    const login = process.env.SPONSORKIT_GITHUB_LOGIN;
    if (!token) throw new Error("SPONSORKIT_GITHUB_TOKEN is required");
    if (!login) throw new Error("SPONSORKIT_GITHUB_LOGIN is required");

    const nodes = await fetchGitHubSponsorNodes(token, login);
    const now = new Date();

    return nodes
      .filter((n) => n.tier)
      .map<Sponsorship | null>((n) => {
        const tier = n.tier!;
        const monthly = tier.monthlyPriceInDollars;
        // GitHub does not expose an end date for past sponsorships, so we
        // estimate lifetime as one month for one-time / inactive sponsors and
        // months-since-createdAt × monthly for active recurring sponsors.
        const lifetime = tier.isOneTime
          ? monthly
          : n.isActive
            ? monthsBetween(new Date(n.createdAt), now) * monthly
            : monthly;
        if (lifetime <= 0) return null;
        return {
          sponsor: {
            type: n.sponsorEntity.__typename,
            login: n.sponsorEntity.login,
            name: n.sponsorEntity.name ?? n.sponsorEntity.login,
            avatarUrl: n.sponsorEntity.avatarUrl,
            websiteUrl: n.sponsorEntity.websiteUrl ?? undefined,
            linkUrl: `https://github.com/${n.sponsorEntity.login}`,
            socialLogins: { github: n.sponsorEntity.login },
          },
          monthlyDollars: lifetime,
          isOneTime: tier.isOneTime,
          privacyLevel: n.privacyLevel,
          tierName: tier.name,
          createdAt: n.createdAt,
        };
      })
      .filter((s): s is Sponsorship => s !== null);
  },
};

export default defineConfig({
  providers: [
    githubProvider,
    ...OPEN_COLLECTIVE_SLUGS.map(makeOpenCollectiveProvider),
  ],
  // Sum amounts when the same GitHub login appears on multiple platforms.
  sponsorsAutoMerge: true,
  // monthlyDollars holds lifetime totals here; render every contributor.
  includePastSponsors: true,
  outputDir: "public",
  cacheFile: ".sponsorkit-cache/sponsors.json",
  name: "sponsors",
  renderer: "circles",
  formats: ["svg"],
  width: 800,
  circles: {
    radiusMin: 14,
    radiusMax: 110,
  },
});
