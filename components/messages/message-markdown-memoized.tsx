import { FC, memo } from "react"
import ReactMarkdown, { Options } from "react-markdown"
import remarkBreaks from "remark-breaks"

export const MessageMarkdownMemoized: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)
