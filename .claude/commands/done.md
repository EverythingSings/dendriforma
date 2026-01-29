# Done - Complete Work on Current Issue

Use this skill when you've finished implementing a GitHub issue. It ensures nothing is forgotten.

## Checklist

Run through these steps before considering work complete:

### 1. Verify Implementation
- [ ] All tasks from the issue are implemented
- [ ] Code compiles without errors: `npx tsc --noEmit`

### 2. Run Tests
- [ ] Unit tests pass: `npm run test`
- [ ] Visual regression tests pass: `npm run test:visual`
- [ ] Build succeeds: `npm run build`

### 3. Git Operations
- [ ] Review changes: `git status` and `git diff`
- [ ] Stage specific files (avoid `git add -A`)
- [ ] Commit with descriptive message
- [ ] Push to remote: `git push`

### 4. Close the Issue
- [ ] Close with summary: `gh issue close <number> --comment "Summary of what was done"`

## Instructions

Execute each step in order. If any step fails, fix the issue before proceeding. Report the final status to the user including:
- Tests passed/failed
- Commit hash
- Issue closure confirmation
