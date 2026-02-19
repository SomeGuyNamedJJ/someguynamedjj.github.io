import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const CustomExplorer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`explorer ${displayClass}`}>
        <a class="explorer-item" href="/">
          Home
        </a>
        <a class="explorer-item" href="/Projects">
          Projects
        </a>
        <a class="explorer-item" href="/Blog">
          Blog
        </a>
        <a class="explorer-item" href="/Links">
          Links
        </a>
        <a class="explorer-item small" href="/Explorer">
          All Pages
        </a>
      </div>
    )
  }
  return CustomExplorer
}) satisfies QuartzComponentConstructor
