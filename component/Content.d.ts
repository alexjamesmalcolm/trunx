import * as React from 'react'
import { SizeProps } from './modifiers'
export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SizeProps {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}
export declare class Content extends React.Component<ContentProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
