

Routes (from the prototype):  /posts, /posts/:id, /404

Components → React files:
  PostCard → src/components/PostCard.tsx
  Button → src/components/ui/Button.tsx
  Tag → src/components/ui/Tag.tsx

Button variants → prop:  variant = 'primary' | 'secondary'

PostCard layout:
  direction: column
  gap: 16px
  padding: 24px
  radius: 12px

Breakpoint change:
  phone: 1 column, header stacked
  desktop: 3 columns, header in one row

Tokens (all ten):
  color/primary = #1d4ed8
  color/text-primary = #1f2937
  color/text-secondary = #9ca3af
  color/background = #ffffff
  color/surface = #f9fafb
  color/border = #e5e7eb
  color/danger = #dc2626
  space/sm = 8px
  space/md = 16px
  radius/md = 12px