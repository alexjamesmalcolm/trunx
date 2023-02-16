export type CommonModifierProps = Partial<{
  isActive: boolean
  isCentered: boolean
  isFocused: boolean
  isFullwidth: boolean
  isHovered: boolean
  isLoading: boolean
  isRounded: boolean
  isStatic: boolean
}>

export const modifier = ({
  isActive,
  isCentered,
  isFocused,
  isFullwidth,
  isHovered,
  isLoading,
  isRounded,
  isStatic,
}: CommonModifierProps) => ({
  'is-active': isActive,
  'is-centered': isCentered,
  'is-focused': isFocused,
  'is-fullwidth': isFullwidth,
  'is-hovered': isHovered,
  'is-loading': isLoading,
  'is-rounded': isRounded,
  'is-static': isStatic,
})
