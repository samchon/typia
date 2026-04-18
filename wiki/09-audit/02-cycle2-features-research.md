# Audit 2 — 기능·연구 사실 검증

## 주요 적발

1. **Tag 수 — 11개 주장, 실측 ~21개** (`packages/interface/src/tags/` 실제 파일 22, index.ts 21 export)
   - 빠진 것: Constant, ContentMediaType, Examples, Sequence, UniqueItems, Type 등
2. **Zod 다운로드 모순**
   - wiki: "~31M (v4 기준) / 139M (일부 집계) [사실]"
   - 2026-04 실제: Snyk **144.6M**, Socket 101.9M, npm-trends 102M → 100~144M 범위가 정확
   - "31M"은 v4 런칭 시점 추가분으로 보이며, 현재 절대치와 혼동
3. **벤치마크 cherry-picking**
   - "에러 경로 782 MB/s"는 object(simple) 단일 수치
   - 다른 케이스: object(hierarchical) 3,143 (우세) vs union(implicit) 530 (약세)
   - class-validator 7.53 MB/s가 **가장 약한데 wiki 비교표에서 은폐**
4. **"6.75% → 100%" 출처 부족**
   - "블로그 2026-03-26"이 어떤 블로그인지 불명
   - AutoBE 정의 링크 없음
   - Qwen 외 다른 모델 결과 없음
5. **BAML "8.0k star" 미검증**
6. **ArkType 2.2 기능 리스트** 공식과 대조 필요 (일부 정확)
7. **Valibot 1.37 kB** — "최소 tree-shake 시" 명시 안 됨. Zod도 Mini 쓰면 ~3-6kB
8. **tsgo "Q3~Q4 GA"** — Microsoft 공식은 "mid/late 2026 (summer)" → "Q3~Q4" = AI 재구성
9. **Standard Schema 미구현 [추정]** — typia 현재 소스 미확인 상태로 추정 명기
10. **Sources 섹션 누락**: 04-features/01-validators.md, 01-tests-and-benchmark.md 등 URL 인용 부족

## Wiki 반영
- master plan 02-threat-landscape에 "**~21개 tag**" 정정 반영
- Zod 다운로드 100~144M 표기
- 벤치마크는 범위(min-max) 제시, cherry-pick 금지
- Microsoft 공식 발언은 직접 인용
