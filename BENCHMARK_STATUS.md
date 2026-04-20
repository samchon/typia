# Benchmark Status

This document explains how to read the benchmark materials in this repository.

## Current Position

The repository keeps benchmark results under [`benchmark/results`](./benchmark/results).

That directory is an **archive** of measured results across:

- different machines
- different processor classes
- different periods
- different package versions

## What This Means

- benchmark result directories are valuable evidence
- benchmark result directories are **not automatically** the current flagship benchmark for the latest package version
- marketing or README performance claims should be tied to an explicitly chosen current result set when they are refreshed

## Current Repository Policy

At the moment, this repository does **not** designate one single benchmark result directory as the canonical flagship result for the latest release line.

If you update performance claims, do one of the following:

1. pick one current benchmark result set and name it explicitly
2. re-measure and publish a new current flagship result
3. weaken claim wording so it clearly refers to the archive rather than one current benchmark snapshot

## Contributor Guidance

When changing benchmark-related docs:

- do not silently treat an old result directory as the current representative result
- note the package version and environment if you publish a new headline number
- keep archive links, but distinguish them from current headline evidence
