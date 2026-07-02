# TODO: Remove Subscription/Playlist Logic & Fix Vite Error

## Steps to Complete (Approved Plan):

### 1. Clear Vite cache (to fix Pricing.tsx import error)
- Execute: `cd frontend && rm -rf node_modules/.vite && npm install`

### 2. Clean comments
- [ ] Navigation.tsx: Remove `/* Pricing Link */`
- [ ] LandingPgaes.tsx: Remove `/* <SubscriptionPricing /> */`

### 3. Remove playlist logic
- [ ] courseView/ui/Overview.tsx: Remove playlistId handling
- [ ] courseView/ui/Assignments.tsx: Remove playlistAssignments prop/logic

### 4. Remove subscription logic  
- [ ] courses/Data/types.ts: Remove `subscribePrice`
- [ ] legal/TermsConditionComp.tsx: Remove subscription text
- [ ] userDashboard/BillingAndInvoices.tsx: Remove all `is_subscription`, `is_playlist`, `is_sub_plan` filters/modals

### 5. Test
- Restart `npm run dev`
- Verify no vite errors
- Test billing shows all purchases
- Test course view without playlist params

### 6. Mark complete
- Update this TODO.md
- attempt_completion

**ALL

