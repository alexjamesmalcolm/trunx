import * as React from 'react'
export interface ColumnsProps extends React.HTMLAttributes<HTMLDivElement> {
  isDesktop?: boolean
  isGapless?: boolean
  isMobile?: boolean
  isMultiline?: boolean
}
export declare class Columns extends React.Component<ColumnsProps> {
  render(): React.ReactNode
}
